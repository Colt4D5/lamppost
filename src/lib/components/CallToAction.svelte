<script lang="ts">
  let {
    title = "Bring clarity to your next move.",
    description = "Tell us where your work is headed. We will help you make the digital experience worthy of it.",
    href = "/contact",
    label = "Start a conversation",
  }: {
    title?: string;
    description?: string;
    href?: string;
    label?: string;
  } = $props();
</script>

<section class="cta">
  <div>
    <p class="eyebrow">Lamppost Studios</p>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
  <a class="button button-gold" {href}>{label}</a>
</section>

<style>
  .cta {
    align-items: end;
    background: var(--color-primary-muted);
    color: white;
    display: grid;
    gap: 1.5rem;
    margin: 3rem 0 0;
    padding: clamp(2rem, 5vw, 4rem) var(--page-gutter);
  }
  div {
    margin: 0 auto;
    max-width: var(--page-width);
    width: 100%;
  }
  .eyebrow {
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  h2 {
    font-size: clamp(2rem, 4vw, 3.3rem);
    line-height: 1;
    margin: 0.6rem 0;
  }
  p {
    max-width: 42rem;
  }
  a {
    justify-self: start;
  }
  @media (min-width: 760px) {
    .cta {
      grid-template-columns: 1fr auto;
    }
    a {
      align-self: center;
      justify-self: end;
    }
  }
</style>
