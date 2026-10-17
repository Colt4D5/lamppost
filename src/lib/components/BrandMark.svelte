<script lang="ts">
  let { compact = false }: { compact?: boolean } = $props();
  import Logo from "#lib/assets/images/logos/lamppost-logo-icon.svg";
  import LogoDarkMode from "#lib/assets/images/logos/lamppost-logo-icon-light.svg";
</script>

<a
	class={["brand-mark", { compact }]}
  href="/"
  aria-label="Lamppost Studios home"
>
	<img class="brand-mark-logo brand-mark-logo-light" src={Logo} alt="" aria-hidden="true" width="90" height="177" />
	<img class="brand-mark-logo brand-mark-logo-dark" src={LogoDarkMode} alt="" aria-hidden="true" width="90" height="177" />
	{#if !compact}
		<span id="brand-mark-text">
			<strong id="brand-mark-name" class="font-display">LAMPPOST</strong>
			<small id="brand-mark-subname" class="font-body">WEB STUDIOS</small>
		</span>
	{/if}
</a>

<style>
  .brand-mark {
    align-items: center;
    color: var(--color-primary);
    display: inline-flex;
    gap: 0.55rem;
    text-decoration: none;
    position: relative;
		.brand-mark-logo {
			width: 2.75rem;
			height: auto;
		}
  }
	.brand-mark-logo-dark {
		display: none;
	}
	:global(html[data-theme="dark"]) {
		.brand-mark .brand-mark-logo-light {
			display: none;
		}
		.brand-mark .brand-mark-logo-dark {
			display: block;
		}
		.brand-mark::before {
			content: '';
			position: absolute;
			left: -1.5em;
			top: 65%;
			transform: translate3d(0, -50%, 0);
			background-image: radial-gradient(circle, hsla(from var(--color-accent) h s l / 0.5) 0%, transparent 60%);
			width: 5em;
			height: 5em;
			z-index: -1;
			animation: glow 0.15s infinite alternate;
		}
	}
	@keyframes glow {
		from {
			transform: translate3d(0, -50%, 0) scale(1);
			opacity: 0.5;
		}
		to {
			transform: translate3d(0, -50%, 0) scale(1.1);
			opacity: 0.5;
		}
	}
	#brand-mark-text {
		text-align: center;
		font-size: 2rem;
		color: var(--text-color);
	}
	#brand-mark-name {
		font-size: 1em;
		display: block;
	}
	#brand-mark-subname {
		font-size: 0.4em;
		letter-spacing: 0.4em;
		display: block;
		position: relative;
		&::before, &::after {
			content: "";
			position: absolute;
			width: 0.75em;
			height: 1.5px;
			background: var(--text-color);
			top: 50%;
			transform: translate3d(0, -50%, 0);
		}
		&::before {
			right: calc(100% - 0.5em);
			clip-path: polygon(100% 0, 100% 100%, 0 50%);
		}
		&::after {
			left: calc(100% - 0.5em);
			clip-path: polygon(0 0, 100% 50%, 0 100%);
		}
	}
</style>
