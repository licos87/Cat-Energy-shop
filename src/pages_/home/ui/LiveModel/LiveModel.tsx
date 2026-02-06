import React from 'react';

import { ImageSlider } from '@pages_/home/ui/ImageSlider/ImageSlider';

import { Text } from '@shared/ui';

import styles from './LiveModel.module.css';

function LiveModel() {
	return (
		<section className={styles.liveModel}>
			<div className={styles.container}>
				<Text
					className={styles.title}
					tag="h3"
					size="xxl"
				>
					Живой пример
				</Text>
				<Text
					size="xs"
					className={styles.text}
				>
					Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на
					Cat Energy Slim. Отличный результат без изнуряющих тренировок! При
					этом он не менял своих привычек и по-прежнему спит по 16 часов в день.
				</Text>
				<div className={styles.exampleContainer}>
					<dl className={styles.example}>
						<dt className={styles.number}>5&nbsp;кг</dt>
						<dd className={styles.description}>снижение веса</dd>
					</dl>
					<dl className={styles.example}>
						<dt className={styles.number}>60&nbsp;дней</dt>
						<dd className={styles.description}>затрачено времени</dd>
					</dl>
					<dl className={styles.money}>
						<dt className={styles.name}>затраты на питание:</dt>
						<dd className={styles.price}>15 000 руб.</dd>
					</dl>
				</div>
			</div>
			<ImageSlider
				before="/assets/image/cat-fat.png"
				after="/assets/image/cat-slim.png"
			/>
		</section>
	);
}

export default LiveModel;
