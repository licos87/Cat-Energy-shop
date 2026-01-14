'use client';

import { FC, ReactElement, ReactNode } from 'react';

import classnames from 'classnames';
import LinkTo, { LinkProps } from 'next/link';

import styles from './Link.module.css';

interface ILink extends LinkProps {
	readonly size?: 'm' | 'xs';
	readonly icon?: ReactElement;
	readonly nowrap?: boolean;
	readonly className?: string;
	readonly children: ReactNode;
}

export const Link: FC<ILink> = (props) => {
	const {
		children,
		size = 'm',
		icon,
		nowrap = false,
		className,
		...restProps
	} = props;

	return (
		<LinkTo
			className={classnames(
				styles[`link-size_${size}`],
				{
					[styles.link]: !icon,
					[styles.link_withIcon]: !!icon,
					[styles.nowrap]: nowrap,
				},
				className,
			)}
			{...restProps}
		>
			{icon ?? null}
			{children}
		</LinkTo>
	);
};
