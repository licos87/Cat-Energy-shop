import { Prisma } from '../../../services/Prisma';
import { mapToProductDTO } from '../lib/productMapper';
import { Product } from '../types';

export const productsService = {
	getAllProducts: async (): Promise<Product[]> => {
		const rawProducts = await Prisma.products.findMany();
		return rawProducts.map(mapToProductDTO);
	},

	getProductById: async (id: number): Promise<Product | null> => {
		const rawProduct = await Prisma.products.findUnique({ where: { id } });
		return rawProduct ? mapToProductDTO(rawProduct) : null;
	},
};
