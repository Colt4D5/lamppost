<script lang="ts">
  import { onMount } from "svelte";
  import type { Snippet } from "svelte";

  type HeroImage = {
    name: string;
    src?: string;
    alt: string;
  };

  let loaded = $state(false);

  let { eyebrow, title, description, children, }: {
    eyebrow: string;
    title: string;
    description: string;
    children?: Snippet;
  } = $props();

  const heroImages: HeroImage[] = [
    {
      name: 'project-one',
      alt: 'Project preview one'
    },
    {
      name: 'project-two',
      alt: 'Project preview two'
    },
    {
      name: 'project-three',
      alt: 'Project preview three'
    },
  ];

  onMount(() => {
    const timer = setTimeout(() => {
      loaded = true;
    }, 1000);
    return () => clearTimeout(timer);
  });
</script>

<section class="page-hero" class:loaded={loaded}>
  <div class="hero-copy">
    <p class="eyebrow">{eyebrow}</p>
    <h1>{title}</h1>
    <p class="description">{description}</p>
    {#if children}{@render children()}{/if} 
  </div>
  <div class="collage-container" aria-hidden="true">
    {#each heroImages as image, index (image.name)}
      <figure class={`collage-frame collage-frame-${index + 1}`}>
        {#if image.src}
          <img src={image.src} alt={image.alt} />
        {:else}
          <div class="collage-placeholder">
            <span></span><span></span><span></span>
          </div>
        {/if}
      </figure>
    {/each}
  </div>
</section>

<style>
  .page-hero {
    display: grid;
    gap: 2rem;
    margin: 0 auto;
    max-width: var(--page-width);
    overflow: hidden;
    padding: clamp(4rem, 9vw, 6rem) var(--page-gutter) 3rem;
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
  .collage-container {
    display: grid;
    gap: clamp(0.4rem, 1.2vw, 0.8rem);
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-template-rows: repeat(5, minmax(2.5rem, 1fr));
    margin: 0 auto;
    width: 100%;
  }
  .collage-frame {
    background: var(--surface-color);
    border: 1px solid var(--border-strong-color);
    box-shadow: none;
    margin: 0;
    min-height: 0;
    overflow: hidden;
    position: relative;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    opacity: 0;
    transition: transform 0.5s var(--transition-bounce), opacity 0.5s var(--transition-bounce);
  }
  .page-hero.loaded .collage-frame {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  .collage-frame-1 {
    grid-column: span 3 / span 3;
    grid-row: span 4 / span 4;
    grid-column-start: 4;
    grid-row-start: 4;
    transform: translate3d(0, 4rem, 0);
    transition-delay: 0.2s;
  }
  .collage-frame-2 {
    grid-column: span 4 / span 4;
    grid-row: span 3 / span 3;
    grid-column-start: 3;
    grid-row-start: 1;
    transform: translate3d(0, -4rem, 0);
    transition-delay: 0.4s;
  }
  .collage-frame-3 {
    grid-column: span 3 / span 3;
    grid-row: span 5 / span 5;
    grid-column-start: 1;
    grid-row-start: 4;
    transform: translate3d(4rem, 0, 0);
    transition-delay: 0.7s;
  }
  .collage-frame img {
    display: block;
    filter: grayscale(1) contrast(1.08);
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
  @media (min-width: 760px) {
    .page-hero {
      grid-template-columns: 4fr 3fr;
      align-items: center;
    }
    .collage-container {
      display: grid;
      gap: clamp(0.55rem, 1vw, 0.85rem);
      grid-template-columns: repeat(5, minmax(0, 1fr));
      grid-template-rows: repeat(5, minmax(0, 1fr));
      height: clamp(23rem, 86vw, 30rem);
      /* height: clamp(28rem, 44vw, 38rem); */
      margin: 0;
      max-width: none;
      padding: 0;
    }
    .collage-frame-1 {
      grid-column: span 2 / span 2;
      grid-row: span 3 / span 3;
      grid-column-start: 1;
      grid-row-start: 2;
    }
    .collage-frame-2 {
      grid-column: span 2 / span 2;
      grid-row: span 3 / span 3;
      grid-column-start: 3;
      grid-row-start: 1;
    }
    .collage-frame-3 {
      grid-column: span 3 / span 3;
      grid-row: span 2 / span 2;
      grid-column-start: 3;
      grid-row-start: 4;
    }
  }
</style>
