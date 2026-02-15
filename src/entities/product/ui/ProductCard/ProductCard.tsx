import { Image } from 'next/dist/client/image-component';

import { RoutePath } from '@shared/constants';
import { Button, Text } from '@shared/ui';

import { Product } from '../../model';
import styles from './ProductCard.module.css';

interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
	const imagePath = `${process.env.NEXT_PUBLIC_API_URL}/images/${product.image}.png`;

	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<div className={styles.imgContainer}>
					<Image
						src={imagePath}
						alt={product.name}
						fill
						sizes="(width: 768px) 280px, 400px"
						style={{ objectFit: 'contain' }}
					/>
				</div>
				<div className={styles.description}>
					<Text
						className={styles.productName}
						tag="h3"
						size="xs"
					>
						{product.name}
					</Text>
					<dl className={styles.productInfo}>
						<dt className={styles.productInfoTitle}>Масса</dt>
						<dd className={styles.productInfoValue}>{product.weight}</dd>

						<dt className={styles.productInfoTitle}>Вкус</dt>
						<dd className={styles.productInfoValue}>{product.flavor}</dd>

						<dt className={styles.productInfoTitle}>Цена</dt>
						<dd className={styles.productInfoValue}>{product.price} ₽</dd>
					</dl>
				</div>
				<Button
					className={styles.orderBtn}
					href={RoutePath.CART}
				>
					Заказать
				</Button>
			</div>
		</div>
	);
};

export default ProductCard;
