import React from 'react';

import { Button, Text } from '@shared/ui';

import styles from './MoreCard.module.css';

interface MoreCardProps {
	showMore: () => void;
}

function MoreCard({ showMore }: MoreCardProps) {
	return (
		<div className={styles.moreCard}>
			<div className={styles.moreCardContent}>
				<div className={styles.moreImage}></div>
				<Text
					className={styles.moreTitle}
					tag="h5"
				>
					Показать еще 100500 товаров
				</Text>
				<Text
					className={styles.moreText}
					tag="span"
				>
					На самом деле вкусов гораздо больше!
				</Text>
			</div>
			<Button
				className={styles.morePlusBtn}
				onClick={showMore}
			>
				Показать все
			</Button>
		</div>
	);
}

export default MoreCard;
