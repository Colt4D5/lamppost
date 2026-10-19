<script lang="ts">
  let {
    number,
    title,
    description,
    outcomes,
  }: {
    number: string;
    title: string;
    description: string;
    outcomes: string[];
  } = $props();
</script>

<article class="service-card theme-underline top-underline">
  <p class="number">{number}</p>
  <h3>{title}</h3>
  <p>{description}</p>
  <!-- <ul>
    {#each outcomes as outcome (outcome)}<li>{outcome}</li>{/each}
  </ul> -->
</article>

<style>
  .service-card {
    /* border-top: 4px solid var(--underline-color); */
		position: relative;
		background-color: var(--color-white);
		border-radius: var(--border-radius);
		overflow: hidden;
		box-shadow: var(--box-shadow);
		padding: 1.5rem 0.75rem 1.25rem;
  }
  .number {
    color: var(--color-button);
    font: 800 0.8rem var(--font-body);
    letter-spacing: 0.1em;
    margin: 0;
  }
  h3 {
    font-size: 1.45rem;
    margin: 0.8rem 0;
  }
  p {
    color: var(--color-primary-muted);
    line-height: 1.6;
  }
  ul {
    list-style: none;
    margin: 1rem 0 0;
    padding: 0;
  }
  li {
    border-top: 1px solid var(--color-outline);
    font-size: 0.9rem;
    padding: 0.55rem 0;
  }
  li::before {
    color: var(--color-button);
    content: "🙚";
    margin-right: 0.5rem;
  }
</style>
