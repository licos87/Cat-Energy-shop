import z from 'zod';

export const ProgramSchemas = z.object({
	id: z.number(),
	name: z.string(),
	description: z.string().nullable(),
	icon: z.string().nullable(),
	category_id: z.number(),
});
