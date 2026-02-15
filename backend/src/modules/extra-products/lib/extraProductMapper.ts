import { extra_products as RawProduct } from '@prisma/client';

import { ExtraProduct } from '../types';

const mapToExtraProductDTO = (rawProduct: RawProduct): ExtraProduct => ({
	...rawProduct,
	price: rawProduct.price.toNumber(),
	description: rawProduct.description ?? undefined,
});

export { mapToExtraProductDTO };
