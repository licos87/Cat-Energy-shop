import { products as RawProduct } from '@prisma/client';

import { Product } from '../types';

const mapToProductDTO = (rawProduct: RawProduct): Product => ({
	...rawProduct,
	price: rawProduct.price.toNumber(),
	description: rawProduct.description ?? undefined,
	image: rawProduct.image ?? undefined,
});

export { mapToProductDTO };
