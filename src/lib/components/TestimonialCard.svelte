<script lang="ts">
	let { quote, name, role }: { quote: string; name: string; role: string } = $props();
</script>

<figure class="testimonial"><blockquote>{quote}</blockquote><figcaption><strong>{name}</strong><span>{role}</span></figcaption></figure>

<style>
	.testimonial { border-left: 3px solid var(--color-accent); margin: 0; padding: 1.25rem; } blockquote { font-family: var(--font-display); font-size: 1.3rem; line-height: 1.35; margin: 0 0 1.5rem; } figcaption { display: grid; font-size: .9rem; gap: .15rem; } figcaption span { color: var(--color-primary-muted); }
</style>