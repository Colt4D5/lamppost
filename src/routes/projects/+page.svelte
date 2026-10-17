<script lang="ts">
	import CallToAction from '#lib/components/CallToAction.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import PortfolioGrid from '#lib/components/PortfolioGrid.svelte';
	const projects = [
		{ name: 'Morrow Field', category: 'Hospitality', summary: 'A considered booking story for a landscape-led retreat.', accent: '#edb63d' }, { name: 'Truss Works', category: 'Manufacturing', summary: 'A clearer digital home for technical expertise.', accent: '#08746e' }, { name: 'Civic Thread', category: 'Public service', summary: 'Tools and language for a community institution.', accent: '#d66c47' }, { name: 'Tandem Health', category: 'Health', summary: 'A calm service experience for a growing clinic.', accent: '#6fb8b4' }, { name: 'Juniper House', category: 'Property', summary: 'A portfolio that makes each place feel distinct.', accent: '#ba8dca' }, { name: 'Northline', category: 'Logistics', summary: 'A practical platform for connected operations.', accent: '#5298cb' }];
</script>

<svelte:head><title>Projects | Lamppost Studios</title><meta name="description" content="Selected web design and digital platform work from Lamppost Studios." /></svelte:head>
<PageHero eyebrow="Selected work" title="Digital experiences with somewhere to go." description="A few examples of how we have helped teams make their work clearer, more useful, and easier to choose." />
<section class="projects" aria-label="Project archive"><PortfolioGrid {projects} /></section>
<CallToAction title="See a path for your own project?" label="Talk to the studio" />

<style>.projects { margin: 0 auto; max-width: var(--page-width); padding: 2rem var(--page-gutter) 4rem; }</style>