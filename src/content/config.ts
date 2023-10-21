import { z, defineCollection } from 'astro:content';
const stihCollection = defineCollection({
	type: 'content',
	schema: z.object({
	}),
});
const fotoCollection = defineCollection({
	type: 'content',
	schema: z.object({
		image: z.string().optional(),
	}),
});
export const collections = {
	'stih': stihCollection,
	'foto': stihCollection,
};
