import React from 'react';



import { Image } from 'next/dist/client/image-component';



import { RoutePath } from '@shared/constants/routePath';
import { Button, Text } from '@shared/ui';



import PromoImg from '../assets/promo-img-mobile.png';
import styles from './Hero.module.css';


function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.contentWrapper}>
				<Text
					tag="h2"
					className={styles.heroText}
				>
					Функциональное питание для котов
				</Text>
				<Text
					tag="h5"
					size="xxs"
					className={styles.heroText}
				>
					Занялся собой? Займись котом!
				</Text>
			</div>
			<Button
				href={RoutePath.CATALOG}
				className={styles.heroBtn}
			>
				Подобрать программу
			</Button>
			<Image
				src={PromoImg}
				alt="Cat Energy с курицей"
				className={styles.promoImg}
			/>
		</section>
	);
}

export default Hero;
