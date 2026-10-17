<script lang="ts">
  let { compact = false }: { compact?: boolean } = $props();
  import Logo from "#lib/assets/images/logos/lamppost-logo-icon.svg";
</script>

<a
  class={["brand-mark", { compact }]}
  href="/"
  aria-label="Lamppost Studios home"
>
  <img src={Logo} alt="" aria-hidden="true" width="90" height="177" style="height: auto;" />
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
		img {
			width: 2.75rem;
			height: auto;
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
		font-size: 0.43em;
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
