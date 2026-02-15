import { ExtraProduct } from '@entities/extra-product/model';
import { Product } from '@entities/product/model';
import { ApiRoute } from '@shared/constants';
import { fetchData } from '@shared/lib';

import ExtraProductList from '@/features/extra-product-list/ui';
import ProductList from '@/features/product-list/ui';

const CatalogPage = async () => {
	const { data: products, error: productsError } =
		await fetchData<Product[]>(ApiRoute.PRODUCTS);
	const { data: extraProducts, error: extraProductsError } =
		await fetchData<ExtraProduct[]>(ApiRoute.EXTRA_PRODUCTS);

	return (
		<div>
			<ProductList
				products={products}
				error={productsError}
			/>
			<ExtraProductList
				extraProducts={extraProducts}
				error={extraProductsError}
			/>
		</div>
	);
};

export default CatalogPage;
