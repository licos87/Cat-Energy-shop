import { Prisma } from '../../../services/Prisma';

export const categoriesService = {
	getAllCategories: async () => {
		return Prisma.categories.findMany();
	},
};
