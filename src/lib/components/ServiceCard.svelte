<script lang="ts">
	let { number, title, description, outcomes }: { number: string; title: string; description: string; outcomes: string[] } = $props();
</script>

<article class="service-card"><p class="number">{number}</p><h2>{title}</h2><p>{description}</p><ul>{#each outcomes as outcome (outcome)}<li>{outcome}</li>{/each}</ul></article>

<style>
	.service-card { border-top: 3px solid var(--color-accent); padding: 1.25rem 0; } .number { color: var(--color-button); font: 800 .8rem var(--font-body); letter-spacing: .1em; margin: 0; }
	h2 { font-size: 1.45rem; margin: .8rem 0; } p { color: var(--color-primary-muted); line-height: 1.6; } ul { list-style: none; margin: 1rem 0 0; padding: 0; } li { border-top: 1px solid var(--color-outline); font-size: .9rem; padding: .55rem 0; } li::before { color: var(--color-button); content: '->'; margin-right: .5rem; }
</style>