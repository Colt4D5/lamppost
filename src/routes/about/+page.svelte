<script lang="ts">
	import CallToAction from '#lib/components/CallToAction.svelte';
	import PageHero from '#lib/components/Hero.svelte';
	import SplitFeature from '#lib/components/SplitFeature.svelte';
</script>

<svelte:head><title>About | Lamppost Studios</title><meta name="description" content="Meet Lamppost Studios, a web design partner for focused teams." /></svelte:head>
<PageHero eyebrow="About the studio" title="A steady light for ambitious work." description="We are a small, senior web studio for teams who need more than a good-looking launch." />
<div class="content"><SplitFeature label="How we work" title="Close enough to care about the details." description="We bring strategy, design, and development into one practical conversation. That means fewer handoffs, sharper decisions, and a site that reflects the work it represents." points={['Senior hands on every project', 'Small, decisive project teams', 'Plain-language collaboration']} /><section><p class="eyebrow">Our principle</p><h2>Make the useful thing unmistakable.</h2><p>Every page is a decision about what deserves attention. We help teams make those decisions with confidence, then turn them into a durable digital presence.</p></section></div>
<CallToAction title="Have something worth bringing into focus?" />

<style>
	.content { margin: 0 auto; max-width: var(--page-width); padding: 1rem var(--page-gutter) 3rem; } section { border-top: 1px solid var(--color-outline); max-width: 46rem; padding: 3rem 0; } .eyebrow { color: var(--color-button); font-size: .78rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; } h2 { font-size: clamp(2rem, 4vw, 3.4rem); line-height: 1.05; } section p:last-child { color: var(--color-primary-muted); line-height: 1.7; }
</style>