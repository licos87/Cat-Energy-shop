'use client';

import React from 'react';

import { ApiRoute } from '@shared/constants';
import { Button } from '@shared/ui';
import { SocialItem } from '@widgets/footer/model/types';

import LogoText from '../../../../../public/assets/svg/logo-text.svg';
import styles from './FooterBottom.module.css';

interface FooterBottomProps {
	socialList: SocialItem[];
}

function FooterBottom({ socialList }: FooterBottomProps) {
	return (
		<div className={styles.footerBottom}>
			<Button
				href={ApiRoute.MAIN}
				className={styles.logoTitle}
			>
				<LogoText
					width={101}
					height={18}
					className={styles.logoTitle}
				/>
			</Button>
			<ul className={styles.socialList}>
				{socialList.map((socialItem) => (
					<li
						className={styles.socialItem}
						key={socialItem.name}
					>
						<a href={socialItem.href}>
							<span
								className={styles.socialImg}
								style={{ maskImage: `url(${socialItem.img})` }}
							/>
						</a>
					</li>
				))}
			</ul>
			<span className={styles.companyLink}>
				<a
					href="https://htmlacademy.ru/"
					className={styles.companyName}
				>
					HTML Academy
				</a>
				<a className={styles.companyLogo} />
			</span>
		</div>
	);
}

export default FooterBottom;
