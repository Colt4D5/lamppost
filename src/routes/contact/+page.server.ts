import { fail } from '@sveltejs/kit';
import { deliverContactSubmission, type ContactSubmission } from '../../lib/server/contact-delivery';
import type { Actions } from './$types';

const referralSources = new Set(['Search engine', 'Referral', 'Social media', 'Event', 'Other']);

function value(formData: FormData, field: string): string {
	return String(formData.get(field) ?? '').trim();
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const values: ContactSubmission = {
			name: value(formData, 'name'),
			email: value(formData, 'email'),
			phone: value(formData, 'phone'),
			location: value(formData, 'location'),
			hear: value(formData, 'hear'),
			message: value(formData, 'message')
		};
		const errors: Partial<Record<keyof ContactSubmission, string>> = {};

		if (values.name.length < 2) errors.name = 'Please enter your name.';
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email address.';
		if (values.phone && values.phone.length < 7) errors.phone = 'Please enter a valid phone number.';
		if (!values.location) errors.location = 'Please enter your location.';
		if (!referralSources.has(values.hear)) errors.hear = 'Please choose how you heard about us.';
		if (values.message.length < 20) errors.message = 'Please share a little more about your project.';

		if (Object.keys(errors).length > 0) return fail(400, { errors, values });

		try {
			await deliverContactSubmission(values);
		} catch {
			return fail(500, {
				errors: { message: 'We could not send your enquiry. Please try again shortly.' },
				values
			});
		}

		return { success: true };
	}
} satisfies Actions;