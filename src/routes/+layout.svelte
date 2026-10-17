<script lang="ts">
	import '../app.css';
	import favicon from '#lib/assets/favicon.svg';
	import SiteFooter from '#lib/components/Footer.svelte';
	import SiteHeader from '#lib/components/Header.svelte';
	import { setTheme, ThemeController } from '#lib/state/theme.svelte.ts';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
	const theme = new ThemeController();
	setTheme(theme);
	$effect(() => {
		theme.apply();
		return theme.listenForSystemTheme();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="description" content="Lamppost Studios designs web experiences and digital systems for ambitious teams." />
	<meta name="theme-color" content="#08746e" />
	<title>Lamppost Studios | Web design with direction</title>
</svelte:head>

<a class="skip-link" href="#main-content">Skip to content</a>
<SiteHeader />
<main id="main-content">{@render children()}</main>
<SiteFooter />
