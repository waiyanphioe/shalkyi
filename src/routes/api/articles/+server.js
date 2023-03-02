import { json } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';

export const GET = async () => {
	const articles = await prisma.article.findMany();

	return json(articles);
};
