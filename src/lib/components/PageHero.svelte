<script lang="ts">
  import type { Snippet } from "svelte";
  let { eyebrow, title, description, children, }: {
    eyebrow: string;
    title: string;
    description: string;
    children?: Snippet;
  } = $props();
</script>

<section class="page-hero">
  <div class="hero-copy">
    <p class="eyebrow">{eyebrow}</p>
    <h1>{title}</h1>
    <p class="description">{description}</p>
    {#if children}{@render children()}{/if}
  </div>
  <div class="lantern-pattern" aria-hidden="true">
    <span></span><span></span><span></span>
  </div>
</section>

<style>
  .page-hero {
    display: grid;
    gap: 2rem;
    margin: 0 auto;
    max-width: var(--page-width);
    overflow: hidden;
    padding: clamp(4rem, 9vw, 8rem) var(--page-gutter) 3rem;
  }
  .hero-copy {
    max-width: 48rem;
  }
  .eyebrow {
    color: var(--color-button);
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }
  h1 {
    font-size: clamp(2.8rem, 6vw, 5.3rem);
    line-height: 0.96;
    margin: 0.5rem 0 1.25rem;
    max-width: 14ch;
  }
  .description {
    color: var(--color-primary-muted);
    font-size: 1.15rem;
    line-height: 1.65;
    max-width: 42ch;
  }
  .lantern-pattern {
    align-items: end;
    display: flex;
    gap: 0.55rem;
    height: 7rem;
    justify-content: end;
  }
  .lantern-pattern span {
    background: var(--color-accent);
    border-radius: 50% 50% 10% 10%;
    box-shadow: 0 0 0 8px var(--color-accent-soft);
    display: block;
    height: 2.5rem;
    transform: rotate(45deg);
    width: 2.5rem;
  }
  .lantern-pattern span:nth-child(2) {
    height: 4.5rem;
    width: 4.5rem;
  }
  .lantern-pattern span:nth-child(3) {
    height: 1.5rem;
    width: 1.5rem;
  }
  @media (min-width: 760px) {
    .page-hero {
      grid-template-columns: 1fr 0.5fr;
      align-items: end;
    }
  }
</style>
