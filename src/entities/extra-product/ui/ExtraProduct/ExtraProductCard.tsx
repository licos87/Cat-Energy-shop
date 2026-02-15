import { Button, Text } from '@shared/ui';



import { ExtraProduct } from '../../model';
import styles from './ExtraProductCard.module.css';


interface ExtraProductCardProps {
	product: ExtraProduct;
}

const ExtraProductCard = ({ product }: ExtraProductCardProps) => {
	return (
		<div className={styles.extraProductCard}>
			<Text
				className={styles.extraProductTitle}
				tag="h5"
				size="xs"
			>
				{product.name}
			</Text>
			<dl className={styles.extraProductInfo}>
				<dt>{product.description}</dt>
				<dd>{product.price} ₽</dd>
			</dl>
			<Button>Заказать</Button>
		</div>
	);
};

export default ExtraProductCard;
