import { Prisma } from '../../../services/Prisma';

export const programsService = {
	getAllPrograms: async () => {
		return Prisma.programs.findMany({ orderBy: { category_id: 'desc' } });
	},
};
