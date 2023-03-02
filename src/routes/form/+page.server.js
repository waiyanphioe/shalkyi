import { prisma } from '$lib/server/prisma';

export async function load() {
	const articles = await prisma.article.findMany();

	return { articles };
}

export const actions = {
	createArticle: async ({ request }) => {
		const datar = await request.formData();
		const title = datar.get('title');
		const content = datar.get('content');

		try {
			await prisma.article.create({ data: { title, content } });
		} catch (error) {
			console.log(error);
		}

		return {
			status: 201
		};
	}
};
