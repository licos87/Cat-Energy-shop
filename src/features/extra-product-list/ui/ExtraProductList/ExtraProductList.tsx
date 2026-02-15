import { Image } from 'next/dist/client/image-component';

import ExtraProductCard from '@entities/extra-product';
import { ExtraProduct } from '@entities/extra-product/model';
import { Text } from '@shared/ui';

import GiftImg from '../../assets/gift.svg';
import petCarrierImg from '../../assets/pet-carrier.png';
import styles from './ExtraProductList.module.css';

interface ExtraProductListProps {
	extraProducts: ExtraProduct[];
	error: boolean;
}

const ExtraProductList = ({ extraProducts, error }: ExtraProductListProps) => {
	if (error) {
		return <div>Ошибка загрузки дополнительных продуктов</div>;
	}

	return (
		<section className={styles.extraProduct}>
			<Text
				className={styles.title}
				tag="h2"
				size="l"
			>
				Дополнительные товары
			</Text>
			<ul className={styles.extraProductList}>
				{extraProducts.map((product) => (
					<li
						className={styles.extraProductItem}
						key={product.id}
					>
						<ExtraProductCard product={product} />
					</li>
				))}
			</ul>
			<div className={styles.promoImgContainer}>
				<Image
					className={styles.promoImg}
					src={petCarrierImg}
					alt="Сумка-переноска для животных"
				/>
				<div className={styles.promoTextContainer}>
						<GiftImg />
					<Text
						className={styles.promoText}
						tag="span"
					>
						Закажите все и получите чехол для кота в подарок!
					</Text>
				</div>
			</div>
		</section>
	);
};

export default ExtraProductList;
