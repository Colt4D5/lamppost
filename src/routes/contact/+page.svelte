<script lang="ts">
	import PageHero from '#lib/components/Hero.svelte';
	import type { PageProps } from './$types';

	let { form }: PageProps = $props();
	type ContactField = 'name' | 'email' | 'phone' | 'location' | 'hear' | 'message';
	let errors = $derived((form?.errors ?? {}) as Partial<Record<ContactField, string>>);
</script>

<svelte:head>
	<title>Contact | Lamppost Studios</title>
	<meta name="description" content="Start a web design project conversation with Lamppost Studios." />
</svelte:head>

<PageHero
	eyebrow="Start a conversation"
	title="Tell us where you are headed."
	description="A few details are enough to begin. We will reply with the next useful step."
/>

<section class="contact-wrap" aria-labelledby="contact-title">
	<div>
		<p class="eyebrow">Project enquiry</p>
		<h2 id="contact-title">A good brief can start simple.</h2>
		<p>Share the shape of the work and the questions you are trying to answer. We will reply with the next useful step.</p>
	</div>

	<form method="POST">
		<div class="form-status" aria-live="polite" aria-atomic="true">
			{#if form?.success}
				<p>Your enquiry has been sent. We will be in touch soon.</p>
			{:else if form?.errors}
				<p>{errors.message ?? 'Please review the highlighted fields and try again.'}</p>
			{/if}
		</div>

		<div class="field">
			<label for="name">Name</label>
			<input
				id="name"
				name="name"
				autocomplete="name"
				value={form?.values?.name ?? ''}
				aria-describedby={errors.name ? 'name-error' : undefined}
				aria-invalid={errors.name ? 'true' : undefined}
				required
			/>
			{#if errors.name}<p class="field-error" id="name-error">{errors.name}</p>{/if}
		</div>

		<div class="field">
			<label for="email">Email</label>
			<input
				id="email"
				name="email"
				type="email"
				autocomplete="email"
				value={form?.values?.email ?? ''}
				aria-describedby={errors.email ? 'email-error' : undefined}
				aria-invalid={errors.email ? 'true' : undefined}
				required
			/>
			{#if errors.email}<p class="field-error" id="email-error">{errors.email}</p>{/if}
		</div>

		<div class="field">
			<label for="phone">Phone <span>(optional)</span></label>
			<input
				id="phone"
				name="phone"
				type="tel"
				autocomplete="tel"
				value={form?.values?.phone ?? ''}
				aria-describedby={errors.phone ? 'phone-error' : undefined}
				aria-invalid={errors.phone ? 'true' : undefined}
			/>
			{#if errors.phone}<p class="field-error" id="phone-error">{errors.phone}</p>{/if}
		</div>

		<div class="field">
			<label for="location">Location</label>
			<input
				id="location"
				name="location"
				autocomplete="address-level2"
				value={form?.values?.location ?? ''}
				aria-describedby={errors.location ? 'location-error' : undefined}
				aria-invalid={errors.location ? 'true' : undefined}
				required
			/>
			{#if errors.location}<p class="field-error" id="location-error">{errors.location}</p>{/if}
		</div>

		<div class="field full">
			<label for="hear">How did you hear about us?</label>
			<select
				id="hear"
				name="hear"
				value={form?.values?.hear ?? ''}
				aria-describedby={errors.hear ? 'hear-error' : undefined}
				aria-invalid={errors.hear ? 'true' : undefined}
				required
			>
				<option value="" disabled>Select one</option>
				<option value="Search engine">Search engine</option>
				<option value="Referral">Referral</option>
				<option value="Social media">Social media</option>
				<option value="Event">Event</option>
				<option value="Other">Other</option>
			</select>
			{#if errors.hear}<p class="field-error" id="hear-error">{errors.hear}</p>{/if}
		</div>

		<div class="field full">
			<label for="message">What are you working on?</label>
			<textarea
				id="message"
				name="message"
				rows="6"
				aria-describedby={errors.message ? 'message-error' : undefined}
				aria-invalid={errors.message ? 'true' : undefined}
				required
			>{form?.values?.message ?? ''}</textarea>
			{#if errors.message}<p class="field-error" id="message-error">{errors.message}</p>{/if}
		</div>

		<button class="button" type="submit">Send enquiry</button>
	</form>
</section>

<style>
	.contact-wrap {
		display: grid;
		gap: 3rem;
		margin: 0 auto;
		max-width: var(--page-width);
		padding: 2rem var(--page-gutter) 5rem;
	}

	.eyebrow {
		color: var(--color-button);
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	h2 {
		font-size: clamp(2rem, 4vw, 3rem);
		line-height: 1.05;
	}

	p {
		color: var(--color-primary-muted);
		line-height: 1.65;
		max-width: 34rem;
	}

	form {
		display: grid;
		gap: 1rem;
	}

	.form-status {
		grid-column: 1 / -1;
		min-height: 1.5rem;
	}

	.form-status p,
	.field-error {
		color: var(--color-button);
		font-size: 0.88rem;
		margin: 0;
	}

	.field {
		display: grid;
		gap: 0.4rem;
	}

	label {
		font-size: 0.88rem;
		font-weight: 800;
	}

	label span {
		color: var(--color-primary-muted);
		font-weight: 400;
	}

	input,
	select,
	textarea {
		background: var(--color-light);
		border: 1px solid var(--color-outline);
		border-radius: 0;
		color: var(--color-primary);
		min-height: 2.75rem;
		padding: 0.65rem;
	}

	input[aria-invalid='true'],
	select[aria-invalid='true'],
	textarea[aria-invalid='true'] {
		border-color: var(--color-button);
	}

	textarea {
		min-height: 9rem;
	}

	button {
		cursor: pointer;
		justify-self: start;
	}

	@media (min-width: 760px) {
		.contact-wrap {
			grid-template-columns: 0.8fr 1.2fr;
		}

		form {
			grid-template-columns: repeat(2, 1fr);
		}

		.full {
			grid-column: 1 / -1;
		}
	}
</style>