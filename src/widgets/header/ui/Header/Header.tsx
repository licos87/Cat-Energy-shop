import React from 'react';

import { Image } from 'next/dist/client/image-component';

import { RoutePath } from '@shared/constants/routePath';
import { Link } from '@shared/ui';
import { NavMenu } from '@widgets/header/ui';

import LogoText from '../../assets/logo-text.svg';
import styles from './Header.module.css';

function Header() {

	return (
		<header className={styles.header}>
			<Link
				href={RoutePath.MAIN}
				className={styles.logoLink}
			>
				<div className={styles.logoImgContainer}>
					<picture>
						<source
							media="(min-width: 1440px)"
							srcSet="/logo/logo-desktop.svg"
						/>
						<source
							media="(min-width: 768px)"
							srcSet="/logo/logo-tablet.svg"
						/>
						<Image
							className={styles.logoImg}
							src="/logo/logo-mobile.svg"
							alt="Logo"
							width={33}
							height={38}
						/>
					</picture>
				</div>
			</Link>
			<div className={styles.logoContainer}>
				<LogoText
					width={101}
					height={18}
					className={styles.logoTitle}
				/>
			</div>
			<NavMenu />
		</header>
	);
}

export default Header;
