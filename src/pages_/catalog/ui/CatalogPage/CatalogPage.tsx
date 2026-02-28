import ExtraProductList from '@/features/extra-product-list/ui';
import ProductList from '@/features/product-list/ui';

import { ExtraProduct } from '@entities/extra-product/model';
import { Product } from '@entities/product/model';
import { ApiRoute } from '@shared/constants';
import { fetchData } from '@shared/lib';
import { Text } from '@shared/ui';

import styles from './CatalogPage.module.css';

const CatalogPage = async () => {
	const { data: products, error: productsError } = await fetchData<Product[]>(
		ApiRoute.PRODUCTS,
	);
	const { data: extraProducts, error: extraProductsError } = await fetchData<
		ExtraProduct[]
	>(ApiRoute.EXTRA_PRODUCTS);

	return (
		<section className={styles.catalogPage}>
			<Text
				className={styles.title}
				tag="h2"
			>
				Каталог продукции
			</Text>
			<ProductList
				products={products}
				error={productsError}
			/>
			<ExtraProductList
				extraProducts={extraProducts}
				error={extraProductsError}
			/>
		</section>
	);
};

export default CatalogPage;
