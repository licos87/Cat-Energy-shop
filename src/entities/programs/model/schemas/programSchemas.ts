import z from 'zod';

export const ProgramSchemas = z.object({
	id: z.number(),
	name: z.string(),
	description: z.string(),
	icon: z.string(),
	categoryId: z.string(),
});
