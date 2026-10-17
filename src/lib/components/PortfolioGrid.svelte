<script lang="ts">
  export type Project = {
    name: string;
    category: string;
    summary: string;
    accent: string;
  };
  let { projects }: { projects: Project[] } = $props();
</script>

<div class="portfolio-grid">
  {#each projects as project (project.name)}
		<article style={`--project-accent: ${project.accent}`} >
      <div class="project-art" aria-hidden="true">
        <span></span><span></span>
      </div>
      <p>{project.category}</p>
      <h2>{project.name}</h2>
      <span class="summary">{project.summary}</span>
    </article>{/each}
</div>

<style>
  .portfolio-grid {
    display: grid;
    gap: 1px;
    background: var(--color-outline);
  }
  article {
    background: var(--color-light);
    padding: 1.25rem;
  }
  .project-art {
    background: var(--color-primary);
    height: 11rem;
    margin: -1.25rem -1.25rem 1.25rem;
    overflow: hidden;
    position: relative;
  }
  .project-art span {
    background: var(--project-accent);
    display: block;
    height: 70%;
    left: 18%;
    position: absolute;
    top: 16%;
    transform: skew(-16deg);
    width: 34%;
  }
  .project-art span + span {
    background: var(--color-background);
    height: 28%;
    left: 48%;
    top: 45%;
    width: 35%;
  }
  p {
    color: var(--color-button);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.09em;
    margin: 0;
    text-transform: uppercase;
  }
  h2 {
    font-size: 1.4rem;
    margin: 0.45rem 0;
  }
  .summary {
    color: var(--color-primary-muted);
    line-height: 1.5;
  }
  @media (min-width: 620px) {
    .portfolio-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 940px) {
    .portfolio-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
