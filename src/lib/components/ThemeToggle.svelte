<script lang="ts">
  import { getTheme } from "#lib/state/theme.svelte.ts";

	import SunIcon from "@iconify-svelte/gravity-ui/sun";
	import MoonIcon from "@iconify-svelte/gravity-ui/moon";

  const theme = getTheme();
  let label = $derived(
    `Switch to ${theme.effective === "dark" ? "light" : "dark"} theme`,
  );
</script>

<button
  class="theme-toggle"
  type="button"
  onclick={() => theme.toggle()}
  aria-label={label}
  title={label}
>
  {#if theme.effective === "dark"}
    <MoonIcon />
  {:else}
    <SunIcon />
  {/if}
</button>

<style>
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
  }
</style>
