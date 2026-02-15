'use client';

import React, { useState } from 'react';

import classnames from 'classnames';
import { usePathname } from 'next/dist/client/components/navigation';

import { RoutePath } from '@shared/constants/routePath';
import { Button, Link } from '@shared/ui';

import styles from './NavMenu.module.css';

function NavMenu() {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const pathname = usePathname();

	const openToggle = () => setIsOpen((prev) => !prev);

	return (
		<nav
			className={classnames(styles.navContainer, {
				[styles.navContainer_open]: isOpen,
			})}
		>
			<Button
				className={styles.burgerBtn}
				onClick={openToggle}
			>
				<span className="visually-hidden">Главное меню</span>
				<span className={styles.burger_btn_span}></span>
			</Button>
			<ul className={styles.navList}>
				<li
					className={classnames(styles.navItem, {
						[styles.active]: pathname === RoutePath.MAIN,
					})}
				>
					<Link
						href={RoutePath.MAIN}
						className={styles.navLink}
						onClick={openToggle}
					>
						Главная
					</Link>
				</li>
				<li
					className={classnames(styles.navItem, {
						[styles.active]: pathname === RoutePath.CATALOG,
					})}
				>
					<Link
						href={RoutePath.CATALOG}
						className={styles.navLink}
						onClick={openToggle}
					>
						Каталог продукции
					</Link>
				</li>
				<li
					className={classnames(styles.navItem, {
						[styles.active]: pathname === RoutePath.FORM,
					})}
				>
					<Link
						href={RoutePath.FORM}
						className={styles.navLink}
						onClick={openToggle}
					>
						Подбор программы
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default NavMenu;
