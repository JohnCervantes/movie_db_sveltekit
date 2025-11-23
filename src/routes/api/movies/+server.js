import { json } from '@sveltejs/kit';
// import { db } from '$lib/server/createDb.js';
// import { db_all, db_get } from '$lib/server/sql';
import { supabase } from '$lib/supabaseClient';

export const GET = async () => {
	const { data: movies, error } = await supabase.from('randomized_movies').select('*').limit(2);

	for (const movie of movies) {
		const { data: rate } = await supabase
			.from('rating')
			.select('rate')
			.eq('rating_id', movie.rating_id)
			.single();

		const { data: director } = await supabase
			.from('director')
			.select('first_name, last_name')
			.eq('director_id', movie.director_id)
			.single();

		movie.director_name = `${director.first_name} ${director.last_name}`;

		movie.rate = rate.rate;
	}

	if (error) {
		return json({ error: error.message }, { status: 500 });
	}

	return json({ movies: movies });
};
