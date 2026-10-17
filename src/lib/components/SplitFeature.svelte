<script lang="ts">
	let { label, title, description, points, reverse = false }: { label: string; title: string; description: string; points: string[]; reverse?: boolean } = $props();
</script>

<section class:reverse class="split-feature"><div class="feature-art" aria-hidden="true"><div></div><span></span><span></span></div><div class="feature-copy"><p class="eyebrow">{label}</p><h2>{title}</h2><p>{description}</p><ul>{#each points as point (point)}<li>{point}</li>{/each}</ul></div></section>

<style>
	.split-feature { display: grid; gap: 2rem; padding: 3rem 0; } .feature-art { background: var(--color-primary); min-height: 17rem; overflow: hidden; position: relative; } .feature-art div { border: 1px solid var(--color-button); height: 70%; left: 20%; position: absolute; top: 15%; transform: rotate(22deg); width: 60%; } .feature-art span { background: var(--color-accent); height: 3rem; position: absolute; transform: rotate(45deg); width: 3rem; } .feature-art span:nth-child(2) { left: 18%; top: 25%; } .feature-art span:nth-child(3) { bottom: 15%; right: 20%; }
	.eyebrow { color: var(--color-button); font-size: .78rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; } h2 { font-size: clamp(1.9rem, 4vw, 3rem); line-height: 1.05; margin: .6rem 0 1rem; } p { color: var(--color-primary-muted); line-height: 1.65; } ul { padding-left: 1.1rem; } li { margin: .65rem 0; } li::marker { color: var(--color-accent); }
	@media (min-width: 760px) { .split-feature { grid-template-columns: 1fr 1fr; align-items: center; gap: clamp(3rem, 8vw, 8rem); } .reverse .feature-art { order: 2; } }
</style>