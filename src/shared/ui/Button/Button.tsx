'use client';

import { AnchorHTMLAttributes, ComponentProps, memo } from 'react';

import classnames from 'classnames';
import Link, { LinkProps } from 'next/link';

import styles from './Button.module.css';

type BaseProps = {
	size?: 's' | 'm' | 'l';
	width?: 'auto' | 'max';
	className?: string;
	children: React.ReactNode;
	categoryFilter?: number;
};

type ButtonProps = BaseProps &
	ComponentProps<'button'> & {
		href?: never;
	};

type AnchorProps = BaseProps &
	Omit<LinkProps, 'href'> &
	Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps | 'href'> & {
		href: LinkProps['href'];
		disabled?: boolean;
	};

type Props = ButtonProps | AnchorProps;

export const Button = memo((props: Props) => {
	const { children, size = 'm', className, width = 'auto', ...rest } = props;

	const isDisabled = 'disabled' in rest ? rest.disabled : false;

	const commonClassName = classnames(
		styles.btn,
		styles[`btn-size_${size}`],
		styles[`btn-width_${width}`],
		{
			[styles['btn-disabled']]: isDisabled,
		},
		className,
	);

	if ('href' in rest && rest.href) {
		const { href, disabled, ...linkProps } = rest as AnchorProps;
		return (
			<Link
				href={href}
				className={classnames(commonClassName, {
					[styles['btn-disabled']]: disabled,
				})}
				{...linkProps}
			>
				{children}
			</Link>
		);
	}

	const { type = 'button', ...buttonProps } = rest as ButtonProps;

	return (
		<button
			className={commonClassName}
			type={type}
			{...buttonProps}
		>
			{children}
		</button>
	);
});

Button.displayName = 'Button';
