import { supabase } from '$lib/supabaseClient';

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch, cookies }) {
	const {
		data: { session }
	} = await supabase.auth.getSession();

	return {
		// Pass the user object down to all pages
		user: session?.user ?? null
	};
}
