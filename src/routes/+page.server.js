/** @type {import('./$types').PageServerLoad} */
export async function load({fetch}) {
	const response = await fetch('/api/movies');
	const data = await response.json();
	
	return { movies: data.movies };
}
