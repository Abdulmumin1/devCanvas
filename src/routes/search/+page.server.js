import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	search: async ({ request }) => {
		let body = Object.fromEntries(await request.formData());
		console.log(body);
		throw redirect(303, `?query=${body.query}`);
	}
};
