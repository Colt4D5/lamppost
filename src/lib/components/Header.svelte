<script lang="ts">
  import { page } from "$app/state";
  import BrandMark from "./BrandMark.svelte";
  import ThemeToggle from "./ThemeToggle.svelte";

  let menuOpen = $state(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/reviews", label: "Reviews" },
    { href: "/contact", label: "Contact" },
  ];
  let navEl: HTMLElement;
  let indicator = $state({
    x: 0,
    y: 0,
    w: 0,
    visible: false,
    positioned: false,
  });
  let showIndicatorFrame: number | undefined;
  function moveIndicator(event: Event) {
    const item = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const nav = navEl.getBoundingClientRect();
    const position = {
      x: item.left - nav.left - 2,
      y: item.bottom - nav.top - 3,
      w: item.width + 4,
    };
    if (indicator.positioned) {
      indicator = { ...indicator, ...position, visible: true };
      return;
    }
    indicator = { ...indicator, ...position };
    showIndicatorFrame = requestAnimationFrame(() => {
      indicator.positioned = true;
      indicator.visible = true;
    });
  }
  function hideIndicator() {
    if (showIndicatorFrame !== undefined) {
      cancelAnimationFrame(showIndicatorFrame);
      showIndicatorFrame = undefined;
    }
    indicator.visible = false;
  }
  function closeMenu() {
    menuOpen = false;
  }
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === "Escape") closeMenu();
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<header>
  <div class="header-inner">
    <BrandMark />
    <button
      class="menu-button"
      type="button"
      aria-expanded={menuOpen}
      aria-controls="site-navigation"
      onclick={() => (menuOpen = !menuOpen)}
    >
      <span class="visually-hidden"
        >{menuOpen ? "Close" : "Open"} navigation</span
      ><span aria-hidden="true">{menuOpen ? "Close" : "Menu"}</span>
    </button>
    <nav
      bind:this={navEl}
      onmouseleave={hideIndicator}
      id="site-navigation"
      class={{ open: menuOpen }}
      aria-label="Main navigation"
    >
			<ul>
      {#each links as link (link.href)}
				<li>
          <a href={link.href} aria-current={page.url.pathname === link.href ? "page" : undefined} onclick={closeMenu} onmouseenter={moveIndicator} onfocusin={moveIndicator} onfocusout={hideIndicator}>
						{link.label}
					</a>
        </li>
      {/each}
		</ul>
      <div
        class="indicator"
        aria-hidden="true"
        class:visible={indicator.visible}
        class:positioned={indicator.positioned}
        style="transform: translate({indicator.x}px, {indicator.y}px); width: {indicator.w}px;"
      ></div>
    </nav>
    <div class="header-actions">
			<a class="button button-small" href="/contact">Get Started</a>
      <ThemeToggle />
    </div>
  </div>
</header>

<style>
  header {
    background: color-mix(in srgb, var(--color-background) 92%, transparent);
    border-bottom: 1px solid var(--color-outline);
    position: sticky;
    top: 0;
    z-index: 10;
  }
  .header-inner {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr auto auto;
    margin: 0 auto;
    max-width: var(--page-width);
    min-height: 4.75rem;
    padding: 1rem var(--page-gutter);
		@media (min-width: 760px) {
			grid-template-columns: auto 1fr auto;
			gap: 4rem;
		}
  }
  nav {
    background: var(--color-light);
    border-bottom: 1px solid var(--color-outline);
    display: none;
    grid-column: 1 / -1;
    margin: 0 calc(var(--page-gutter) * -1);
    padding: 0.6rem var(--page-gutter) 1rem;
		position: relative;
		.indicator {
			background: var(--color-accent);
			height: 3px;
			left: 0;
			opacity: 0;
			pointer-events: none;
			position: absolute;
			top: 0;
      transition: opacity 0.2s ease;
      &.positioned {
        transition:
          transform 0.25s ease,
          width 0.25s ease,
          opacity 0.2s ease;
      }
			&.visible {
				opacity: 1;
			}
		}
		@media (min-width: 760px) {
			background: transparent;
			border: 0;
			display: flex;
			gap: 0.3rem;
			grid-column: auto;
			justify-content: flex-end;
			margin: 0;
			padding: 0;
		}
		&.open {
			display: grid;
		}
		ul {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;
			@media (min-width: 760px) {
				flex-direction: row;
			}
			li {
				a {
					color: var(--link-hover-color);
					padding: 0.75rem 0.5rem;
					text-decoration: none;
					text-transform: lowercase;
					border-left: 3px solid transparent;
					border-bottom: 3px solid transparent;
					@media (min-width: 760px) {
						padding: 0.5rem;
					}
					&:hover {
						/* border-color: var(--color-accent); */
						color: var(--link-color);
						border-left: 3px solid var(--link-color);
						@media (min-width: 760px) {
							color: var(--link-color);
							border-left-color: transparent;
						}
					}
					&[aria-current="page"] {
						border-left: 3px solid var(--link-color);
						@media (min-width: 760px) {
							border-left: none;
							border-bottom: 3px solid var(--link-color);
						}
					}
				}
			}
		}
  }
  .header-actions {
    align-items: center;
    display: flex;
    gap: 0.6rem;
  }
  .menu-button {
    background: transparent;
    border: 0;
    color: var(--link-color);
    cursor: pointer;
    font: 700 0.8rem var(--font-body);
    letter-spacing: 0.08em;
    padding: 0.7rem;
    text-transform: uppercase;
		@media (min-width: 760px) {
			display: none;
		}
  }
  .button-small {
    display: none;
		@media (min-width: 760px) {
			display: inline-flex;
		}
  }
</style>
