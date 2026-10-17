<script lang="ts">
  import { getTheme } from "#lib/state/theme.svelte.ts";

	import SunIcon from "@iconify-svelte/gravity-ui/sun";
	import MoonIcon from "@iconify-svelte/gravity-ui/moon";

	const theme = getTheme();
	const isDarkTheme = $derived(theme.effective === "dark");
  let label = $derived(
    `Switch to ${theme.effective === "dark" ? "light" : "dark"} theme`,
  );
</script>

<div id="theme-toggle-container">
	<button
		class="theme-toggle"
		type="button"
		onclick={() => theme.toggle()}
		aria-label={label}
		title={label}
	>
		<div id="icons">
			<MoonIcon class="theme-icon theme-icon-moon {isDarkTheme ? "active" : ""}" style="flex-shrink:0;" width="24" height="24" />
			<SunIcon class="theme-icon theme-icon-sun {!isDarkTheme ? "active" : ""}" style="flex-shrink:0;" width="24" height="24" />
		</div>
	</button>
</div>

<style>
	#theme-toggle-container {
		overflow: hidden;
	}
  .theme-toggle {
    align-items: center;
    background: transparent;
    border: 1px solid var(--color-outline);
    border-radius: 50%;
    color: var(--text-color);
    cursor: pointer;
    display: inline-flex;
    height: 2.75rem;
    justify-content: center;
    padding: 0;
    width: 2.75rem;
		&:hover {
			color: var(--text-muted-color);
		}
		#icons {
			width: 24px;
			height: 24px;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			transform: translate3d(0, 0, 0);
			transition: transform 0.3s var(--transition-bounce);
		}
  }
	:global(html[data-theme="dark"]) #icons {
		transform: translate3d(0, calc(-100% - 1rem), 0);
	}
</style>
