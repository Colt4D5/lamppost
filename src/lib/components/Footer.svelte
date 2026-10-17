<script lang="ts">
	import BrandMark from './BrandMark.svelte';
	const links = [{ href: '/about', label: 'About' }, { href: '/projects', label: 'Projects' }, { href: '/reviews', label: 'Reviews' }, { href: '/contact', label: 'Contact' }];
</script>

<footer class="site-footer">
	<div class="footer-inner">
		<div><BrandMark /><p>Web design and digital systems for teams with somewhere to go.</p></div>
		<nav aria-label="Footer navigation">{#each links as link (link.href)}<a href={link.href}>{link.label}</a>{/each}</nav>
		<p class="legal">&copy; {new Date().getFullYear()} Lamppost Studios.</p>
	</div>
</footer>

<style>
	.site-footer { background: var(--color-primary); color: var(--color-background); padding: 3rem var(--page-gutter) 2rem; }
	.footer-inner { display: grid; gap: 2rem; margin: 0 auto; max-width: var(--page-width); }
	p { color: var(--color-footer); max-width: 29rem; }
	nav { display: flex; flex-wrap: wrap; gap: 1.2rem; }
	a { color: inherit; text-decoration: none; } a:hover { color: var(--color-accent); }
	.legal { font-size: .85rem; margin: 0; }
	:global(.site-footer .brand-mark) { color: var(--color-background); }
	@media (min-width: 760px) { .footer-inner { grid-template-columns: 2fr 1fr auto; } .legal { align-self: end; text-align: right; } nav { align-content: start; flex-direction: column; } }
</style>