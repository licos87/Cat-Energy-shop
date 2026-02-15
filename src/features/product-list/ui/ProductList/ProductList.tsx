'use client';

import { useState } from 'react';

import ProductCard from '@entities/product';
import MoreCard from '@entities/product/ui/MoreCard/MoreCard';
import { Product } from '@entities/product/model';
import { Text } from '@shared/ui';

import styles from './ProductList.module.css';

interface ProductListProps {
	products: Product[];
	error: boolean;
}

const ProductList = ({ products, error }: ProductListProps) => {
	const [showAll, setShowAll] = useState(false);

	const showLength = showAll ? products.length : 7;
	const showList = products.slice(0, showLength);

	const showListToggle = () => setShowAll((prev) => !prev);

	if (error) {
		return <div>Ошибка загрузки</div>;
	}
	return (
		<section>
			<Text
				className={styles.title}
				tag="h2"
			>
				Каталог продукции
			</Text>
			<ul>
				{showList.map((product) => (
					<li key={product.id}>
						<ProductCard product={product} />
					</li>
				))}
				<li key="showMore">
					<MoreCard showMore={showListToggle} />
				</li>
			</ul>
		</section>
	);
};

export default ProductList;
