<script lang="ts">
	import '#lib/assets/css/fonts.css';
	import '#lib/assets/css/config.css';
	import '#lib/assets/css/app.css';
	import ebGaramondRegularUrl from '#lib/assets/fonts/EBGaramond-Regular.woff2';
	import montserratRegularUrl from '#lib/assets/fonts/Montserrat-Regular.woff2';
	import favicon from '#lib/assets/images/favicon/favicon.svg';
	import Footer from '#lib/components/Footer.svelte';
	import Header from '#lib/components/Header.svelte';
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
	<link rel="preload" href={ebGaramondRegularUrl} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="preload" href={montserratRegularUrl} as="font" type="font/woff2" crossorigin="anonymous" />
	<link rel="icon" href={favicon} />
	<link rel="apple-touch-icon" sizes="180x180" href="src/lib/assets/images/favicon/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="src/lib/assets/images/favicon/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="src/lib/assets/images/favicon/favicon-16x16.png">
	<meta name="description" content="Lamppost Studios designs web experiences and digital systems for ambitious teams." />
	<meta name="theme-color" content="#08746e" />
	<title>Lamppost Studios | Web design with direction</title>
</svelte:head>

<a class="skip-link" href="#main-content">Skip to content</a>

<Header />

<main id="main-content">{@render children()}</main>

<Footer />
