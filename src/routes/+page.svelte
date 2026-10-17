<script lang="ts">
	import CallToAction from '#lib/components/CallToAction.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import ServiceCard from '#lib/components/ServiceCard.svelte';
	import SplitFeature from '#lib/components/SplitFeature.svelte';
	const services = [
		{ number: '01', title: 'Brand websites', description: 'A memorable front door built around your actual business, not a borrowed template.', outcomes: ['Positioning and messaging', 'Information architecture', 'Design and build'] },
		{ number: '02', title: 'Digital tools', description: 'Useful portals, platforms, and product surfaces that make complex work feel direct.', outcomes: ['Workflow mapping', 'Interface systems', 'Accessible implementation'] },
		{ number: '03', title: 'Growth foundations', description: 'A considered system for teams ready to publish, learn, and improve without losing the thread.', outcomes: ['Content systems', 'Measurement plans', 'Ongoing partnership'] }
	];
</script>

<svelte:head><title>Lamppost Studios | Web design with direction</title></svelte:head>
<PageHero eyebrow="Web design with direction" title="Make your next digital move obvious." description="Lamppost Studios helps ambitious teams turn messy ideas into clear, confident web experiences."><a class="button" href="/contact">Plan your project</a></PageHero>
<section class="services" aria-labelledby="services-title"><div class="section-heading"><p class="eyebrow">What we do</p><h2 id="services-title">Useful design. Built to carry the work.</h2></div><div class="service-grid">{#each services as service (service.number)}<ServiceCard {...service} />{/each}</div></section>
<div class="features"><SplitFeature label="A better signal" title="Give your work a shape people can follow." description="We find the essential story, make the paths through it deliberate, and build a visual system that stays recognizably yours." points={['Editorial structure with purpose', 'Clear calls to action', 'A system your team can maintain']} /><SplitFeature reverse label="Built for use" title="The strongest ideas survive contact with reality." description="We pair high-resolution design with practical build decisions, so your site works just as hard behind the scenes." points={['Responsive by default', 'Fast, accessible foundations', 'Purposeful content management']} /></div>
<CallToAction />

<style>
	.services, .features { margin: 0 auto; max-width: var(--page-width); padding: 3rem var(--page-gutter); } .section-heading { display: grid; gap: .5rem; margin-bottom: 2rem; max-width: 42rem; } .eyebrow { color: var(--color-button); font-size: .78rem; font-weight: 800; letter-spacing: .1em; margin: 0; text-transform: uppercase; } h2 { font-size: clamp(2rem, 4vw, 3.4rem); line-height: 1.05; margin: 0; } .service-grid { display: grid; gap: 2rem; } @media (min-width: 760px) { .service-grid { grid-template-columns: repeat(3, 1fr); gap: 2.5rem; } }
</style>
