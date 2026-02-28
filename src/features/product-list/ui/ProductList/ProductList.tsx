'use client';

import { useState } from 'react';

import ProductCard from '@entities/product';
import { Product } from '@entities/product/model';
import MoreCard from '@entities/product/ui/MoreCard/MoreCard';

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
		<ul className={styles.catalogList}>
			{showList.map((product) => (
				<li key={product.id}>
					<ProductCard product={product} />
				</li>
			))}
			<li className={styles.moreCardPlace} key="showMore">
				<MoreCard showMore={showListToggle} />
			</li>
		</ul>
	);
};

export default ProductList;
