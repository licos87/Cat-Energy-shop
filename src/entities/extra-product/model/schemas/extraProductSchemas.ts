import z from 'zod';

export const ExtraProductSchemas = z.object({
	id: z.number(),
	name: z.string(),
	price: z.number(),
	description: z.string().nullish(),
});
