import React from 'react';

import { HOW_WORK_DATA } from '@pages_/home/constants';
import classnames from 'classnames';

import { Text } from '@shared/ui';

import styles from './HowWork.module.css';

function HowWork() {
	return (
		<section className={styles.howWork}>
			<Text
				className={styles.title}
				tag="h2"
				size="xxl"
			>
				Как это работает
			</Text>
			<ul className={styles.list}>
				{HOW_WORK_DATA.map((item) => (
					<li
						className={classnames(styles.listItem, styles[item.icon])}
						key={item.icon}
					>
						<p className={styles.text}>{item.text}</p>
					</li>
				))}
			</ul>
		</section>
	);
}

export default HowWork;
