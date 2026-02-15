import z from 'zod';

export const ProductSchemas = z.object({
	id: z.number(),
	name: z.string(),
	weight: z.number(),
	flavor: z.string(),
	price: z.number(),
	description: z.string().nullish(),
	image: z.string().nullish(),
	category_id: z.number(),
});
