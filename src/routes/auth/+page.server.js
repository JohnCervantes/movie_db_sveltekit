import { supabase } from '$lib/supabaseClient';
import { fail, redirect } from '@sveltejs/kit';

/** @satisfies {import('./$types').Actions} */
export const actions = {
	signup: async (event) => {
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
	},

	login: async (event) => {
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
        throw redirect(303, '/');
		
	},

	logout: async ({ cookies }) => {
        
        const { error } = await supabase.auth.signOut();
        
        cookies.delete('supabase_auth_token', { path: '/' }); 
        
        if (error) {
            console.error('Supabase Logout Error:', error);
        }

        throw redirect(303, '/'); 
    }
};
