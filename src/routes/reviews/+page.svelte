<script lang="ts">
	import CallToAction from '#lib/components/CallToAction.svelte';
	import PageHero from '#lib/components/PageHero.svelte';
	import TestimonialCard from '#lib/components/TestimonialCard.svelte';
	const testimonials = [
		{ quote: 'They took a complicated story and gave us a site our whole team can use with confidence.', name: 'Mara Coleman', role: 'Director, Tandem Health' }, { quote: 'Lamppost asked better questions than anyone else in the room. The result feels inevitable.', name: 'Elias Chen', role: 'Founder, Northline' }, { quote: 'We gained a partner who could hold strategy and detail at the same time.', name: 'Simone Wells', role: 'Head of Brand, Morrow Field' }, { quote: 'The process was exacting, human, and remarkably clear from start to finish.', name: 'Ravi Shah', role: 'Operations Lead, Truss Works' }, { quote: 'Our new platform has made it much easier for people to understand what we offer.', name: 'Lydia Frost', role: 'Program Director, Civic Thread' }, { quote: 'The team gave our work a bolder voice without losing its restraint.', name: 'Oliver Grant', role: 'Principal, Juniper House' }
	];
</script>

<svelte:head><title>Reviews | Lamppost Studios</title><meta name="description" content="What Lamppost Studios clients say about working together." /></svelte:head>
<PageHero eyebrow="Client notes" title="Good work makes room for better work." description="We care about the result, but also about making the way there feel clear, grounded, and worth the effort." />
<section class="reviews" aria-label="Client testimonials">{#each testimonials as testimonial (testimonial.name)}<TestimonialCard {...testimonial} />{/each}</section>
<CallToAction title="Ready for a clearer way forward?" />

<style>.reviews { display: grid; gap: 1px; background: var(--color-outline); margin: 0 auto; max-width: var(--page-width); padding: 1px; } :global(.reviews .testimonial) { background: var(--color-light); } @media (min-width: 760px) { .reviews { grid-template-columns: repeat(2, 1fr); } }</style>