import React from 'react';

import { Image } from 'next/dist/client/image-component';

import { RoutePath } from '@shared/constants/routePath';
import { Button, Text } from '@shared/ui';

import PromoImgMobile from '../assets/promo-img-mobile.png';
import PromoImg from '../assets/promo-img.png';
import styles from './Hero.module.css';

function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.contentWrapper}>
				<div className={styles.textWrapper}>
					<Text
						tag="h2"
						className={styles.heroText}
					>
						Функциональное питание для котов
					</Text>
					<Text
						tag="span"
						size="xxs"
						className={styles.heroText}
					>
						Занялся собой? Займись котом!
					</Text>
				</div>
				<Button
					href={RoutePath.FORM}
					className={styles.heroBtn}
				>
					Подобрать программу
				</Button>
			</div>
			<picture>
				<source
					media="(min-width: 768px)"
					srcSet={PromoImg.src}
					width={709}
					height={609}
				/>
				<Image
					src={PromoImgMobile}
					alt="Cat Energy с курицей"
					className={styles.promoImg}
					width={280}
					height={270}
				/>
			</picture>
		</section>
	);
}

export default Hero;
