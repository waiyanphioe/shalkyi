import { json } from '@sveltejs/kit';
import { movies } from '$lib/data/movies.js';

export const GET = ({ params }) => {
	const { movieId } = params;
	const movie = movies.find((movie) => movie.id === movieId);
	return json(movie);
};
