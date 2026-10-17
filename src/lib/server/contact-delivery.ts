export interface ContactSubmission {
	name: string;
	email: string;
	phone: string;
	location: string;
	hear: string;
	message: string;
}

export async function deliverContactSubmission(submission: ContactSubmission): Promise<void> {
	console.info('Lamppost Studios contact enquiry received', {
		email: submission.email,
		hear: submission.hear,
		location: submission.location
	});
}