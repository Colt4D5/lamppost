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
      id="site-navigation"
      class={{ open: menuOpen }}
      aria-label="Main navigation"
    >
      {#each links as link (link.href)}
        <a
          href={link.href}
          aria-current={page.url.pathname === link.href ? "page" : undefined}
          onclick={closeMenu}>{link.label}</a
        >
      {/each}
    </nav>
    <div class="header-actions">
      <ThemeToggle /><a class="button button-small" href="/contact"
        >Start a project</a
      >
    </div>
  </div>
</header>

<style>
  header {
    background: color-mix(in srgb, var(--color-background) 92%, transparent);
    border-bottom: 1px solid var(--color-outline);
    position: sticky;
    top: 0;
		padding: 1rem;
    z-index: 10;
  }
  .header-inner {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr auto auto;
    margin: 0 auto;
    max-width: var(--page-width);
    min-height: 4.75rem;
    padding: 0 var(--page-gutter);
  }
  nav {
    background: var(--color-light);
    border-bottom: 1px solid var(--color-outline);
    display: none;
    grid-column: 1 / -1;
    margin: 0 calc(var(--page-gutter) * -1);
    padding: 0.6rem var(--page-gutter) 1rem;
  }
  nav.open {
    display: grid;
  }
  nav a {
    border-left: 2px solid transparent;
    color: var(--color-primary-muted);
    padding: 0.75rem 0.5rem;
    text-decoration: none;
  }
  nav a:hover {
    border-color: var(--color-accent);
    color: var(--color-primary);
  }
  .header-actions {
    align-items: center;
    display: flex;
    gap: 0.6rem;
  }
  .menu-button {
    background: transparent;
    border: 0;
    color: var(--color-primary);
    cursor: pointer;
    font: 700 0.8rem var(--font-body);
    letter-spacing: 0.08em;
    padding: 0.7rem;
    text-transform: uppercase;
  }
  .button-small {
    display: none;
  }
  @media (min-width: 760px) {
    .header-inner {
      grid-template-columns: auto 1fr auto;
      gap: 2rem;
    }
    .menu-button {
      display: none;
    }
    nav,
    nav.open {
      background: transparent;
      border: 0;
      display: flex;
      gap: 0.3rem;
      grid-column: auto;
      justify-content: flex-end;
      margin: 0;
      padding: 0;
    }
    nav a {
      padding: 0.5rem;
    }
    .button-small {
      display: inline-flex;
    }
  }
</style>
