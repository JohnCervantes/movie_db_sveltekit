// src/routes/logout/+page.server.js (Recommended structure)

import { redirect } from '@sveltejs/kit';
import { supabase } from '$lib/supabaseClient'; // <-- Your Supabase client

/** @satisfies {import('./$types').Actions} */
export const actions = {
    // The default action for POST requests to this route
    default: async ({ cookies }) => {
        
        const { error } = await supabase.auth.signOut();
        
        cookies.delete('supabase_auth_token', { path: '/' }); 
        
        if (error) {
            console.error('Supabase Logout Error:', error);
        }

        throw redirect(303, '/'); 
    }
};