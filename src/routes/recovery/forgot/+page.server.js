import { fail } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	forgot: async ({ url, request, locals: { supabase } }) => {
		let body = Object.fromEntries(await request.formData());
		let email = body.email;
		if (email) {
			let { data, error } = await supabase.auth.resetPasswordForEmail(email, {
				redirectTo: `${url.origin}recovery/reset`
			});
			if (error) return fail(400, { message: 'Error Completing request' });
			return { success: true };
		}
	}
};