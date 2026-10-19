<script lang="ts">
	import CallToAction from '#lib/components/CallToAction.svelte';
	import PageHero from '#lib/components/Hero.svelte';
	import ServiceCard from '#lib/components/ServiceCard.svelte';
	import SplitFeature from '#lib/components/SplitFeature.svelte';
	import IconArrowRight from "@iconify-svelte/gravity-ui/arrow-right";

	const services = [
		{ number: '01', title: 'Mobile First Design', description: 'We start building your site for mobile devices first making sure the code is as lean and optimized with no bloated waste and makes the site even more responsive.', outcomes: ['Positioning and messaging', 'Information architecture', 'Design and build'] },
		{ number: '02', title: 'Fully Responsive', description: 'Your website will fit all mobile screens sizes, tablets, and desktop sizes so visitors can access your site from anywhere and see a beautiful site no matter the screen size.', outcomes: ['Workflow mapping', 'Interface systems', 'Accessible implementation'] },
		{ number: '03', title: 'Optimized Page Speed', description: 'If your site takes more than 3 seconds to load you can lose up to 50% your traffic because it took too long. Our sites load 1 second or less ensuring everyone that visits your site reaches it.', outcomes: ['Content systems', 'Measurement plans', 'Ongoing partnership'] },
		{ number: '04', title: 'SEO Services', description: 'We have an in-house SEO specialist who understands local SEO and how to rank in your local market with plenty of case studies to show results and monthly reports.', outcomes: ['Positioning and messaging', 'Information architecture', 'Design and build'] },
		{ number: '05', title: 'Google PPC Ads', description: 'We also offer Pay-Per-Click Google ads creation and management with our Google Ads expert who can create effective ad campaigns to maximize your ROI.', outcomes: ['Workflow mapping', 'Interface systems', 'Accessible implementation'] },
		{ number: '06', title: 'Based in the USA', description: 'We do not hire cheap overseas developers. We are mostly based in the USA with team members in Washington, Texas, Pennsylvania, and the UK and work 100% remote from home.', outcomes: ['Content systems', 'Measurement plans', 'Ongoing partnership'] },
	];
	const hero = {
		eyebrow: "Beautiful Websites. Lasting Impact.",
		title: "Thoughtful Web Solutions for Real Businesses.",
		description: "We design and build clean, modern websites that are fast, accessible, and built to grow with you."
	}
	const splitFeatures = [
		{
			label: "A better signal",
			title: "Give your work a shape people can follow.",
			description: "We find the essential story, make the paths through it deliberate, and build a visual system that stays recognizably yours.",
			points: ['Editorial structure with purpose', 'Clear calls to action', 'A system your team can maintain'],
			reverse: true
		},
		{
			label: "Built for use",
			title: "The strongest ideas survive contact with reality.",
			description: "We pair high-resolution design with practical build decisions, so your site works just as hard behind the scenes.",
			points: ['Responsive by default', 'Fast, accessible foundations', 'Purposeful content management']
		}
	]
</script>

<svelte:head>
	<title>Lamppost Web Studios | Bring Your Business to Light</title>
</svelte:head>

<PageHero {...hero}>
	<a id="contact-button" class="button" href="/contact">
		Let's Build something &nbsp;&nbsp;<span id="icon-arrow-right"><IconArrowRight width="1rem" height="1rem" /></span>
	</a>
</PageHero>

<section class="services" aria-labelledby="services-title">
	<div class="section-heading">
		<p class="eyebrow">What we do</p>
		<h2 id="services-title">Useful design. Built to carry the work.</h2>
	</div>
	<div class="service-grid">
		{#each services as service (service.number)}
			<ServiceCard {...service} />
		{/each}
	</div>
</section>

<div class="features">
	{#each splitFeatures as feature (feature.label)}
		<SplitFeature {...feature} />
	{/each}
</div>

<CallToAction />

<style>
	.services, .features {
		margin: 0 auto;
		max-width: var(--page-width);
		padding: 3rem var(--page-gutter);
		
	}
	.section-heading { display: grid;
		gap: .5rem;
		margin-bottom: 2rem;
		max-width: 42rem;
	}
	.eyebrow { color: var(--color-button);
		font-size: .78rem;
		font-weight: 800;
		letter-spacing: .1em;
		margin: 0;
		text-transform: uppercase;
	}
	h2 { font-size: clamp(2rem, 4vw, 3.4rem);
		line-height: 1.05;
		margin: 0;
	}
	.service-grid { display: grid;
		gap: 2rem;
	}
	@media (min-width: 760px) { 
		.service-grid { 
			grid-template-columns: repeat(3, 1fr);
			gap: 2.5rem;
		}
	}
	#contact-button {
		#icon-arrow-right {
			display: grid;
			place-items: center;
		}
		&:hover #icon-arrow-right {
			animation: entice 0.3s ease-in-out infinite alternate;
		}
	}
	@keyframes entice {
		0% { transform: translateX(0); }
		100% { transform: translateX(0.25rem); }
	}
</style>
