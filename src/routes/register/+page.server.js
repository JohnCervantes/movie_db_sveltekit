import { supabase } from '$lib/supabaseClient';
import { fail, redirect } from '@sveltejs/kit';

/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const email = formData.get('email');
		const password = formData.get('password');


		const { error } = await supabase.auth.signUp({
			email,
			password
		});

		if (error) {
            // Include data to keep the form populated
            return fail(500, { email, error: error.message, type: 'signup' });
        }

		return { success: true, message: 'Check your email for confirmation!', type: 'signup' };
	}
};
