import { supabase } from '$lib/supabaseClient';
import { fail, redirect } from '@sveltejs/kit';

/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async (event) => {
		// TODO log the user in
		const data = await event.request.formData();
        const email = data.get('email');
        const password = data.get('password');
        
        if (!email || !password) {
            return fail(400, { email, error: 'Email and password are required.', type: 'login' });
        }

        // Call Supabase signInWithPassword
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return fail (401, { email, error: error.message, type: 'login' });
        }

        // Success: Supabase has saved the session to the browser's storage.
        // We now redirect the user to the dashboard.
        throw redirect(303, '/');
		
	}
};