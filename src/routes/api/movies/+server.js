import { json } from '@sveltejs/kit';
import { movies } from '$lib/data/movies.js';

export const GET = () => {
	return json(movies);
};
