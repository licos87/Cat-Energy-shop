import { Prisma } from '../../../services/Prisma';
import { mapToExtraProductDTO } from '../lib/extraProductMapper';
import { ExtraProduct } from '../types';


export const extraProductsService = {
	getAllExtraProducts: async (): Promise<ExtraProduct[]> => {
		const rawExtraProducts = await Prisma.extra_products.findMany();
		return rawExtraProducts.map(mapToExtraProductDTO);
	},

	getExtraProductById: async (id: number): Promise<ExtraProduct | null> => {
		const rawProduct = await Prisma.extra_products.findUnique({ where: { id } });
		return rawProduct ? mapToExtraProductDTO(rawProduct) : null;
	},
};
