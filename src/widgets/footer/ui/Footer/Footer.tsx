'use client';

import React from 'react';

import classnames from 'classnames';
import { usePathname } from 'next/navigation';

import { Text } from '@shared/ui';
import FooterBottom from '@widgets/footer/ui/FooterBottom/FooterBottom';
import YandexMap from '@widgets/yandex-map';

import { socialList } from '../../constants';
import styles from './Footer.module.css';

const Footer = () => {
	const pathname = usePathname();

	return (
		<footer className={styles.footer}>
			<div className={styles.footerTop}>
				<div
					className={classnames(styles.contacts, {
						[styles.catalogContacts]: pathname === '/catalog',
					})}
				>
					<Text
						className={styles.contactsTitle}
						tag="h4"
					>
						Приглашаем к сотрудничеству дилеров!
					</Text>
					<address className={styles.address}>
						ул. Большая Конюшенная, д. 19/8
						<span>Санкт&#8209;Петербург</span>
					</address>
				</div>
				<div className={styles.mapContainer}>
					<YandexMap
						center={[59.938635, 30.323118]}
						zoom={15}
						className={styles.map}
					/>
				</div>
			</div>
			<FooterBottom socialList={socialList} />
		</footer>
	);
};

export default Footer;
