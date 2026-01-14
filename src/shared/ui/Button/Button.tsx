'use client';

import { ButtonHTMLAttributes, memo } from 'react';



import classnames from 'classnames';
import Link from 'next/link';



import styles from './Button.module.css';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	readonly size?: 's' | 'm' | 'l';
	readonly href?: string;
	readonly width?: 'auto' | 'max';
	readonly name?: string;
}

export const Button = memo(
	({
		children,
		size = 'm',
		href = '',
		disabled = false,
		type = 'button',
		className,
		width = 'auto',
		onClick,
		...rest
	}: ButtonProps) => {
		return (
			<>
				{href ? (
					<Link href={href}>
						<button
							className={classnames(
								styles.btn,
								styles[`btn-size_${size}`],
								styles[`btn-width_${width}`],
								{
									[styles['btn-disabled']]: disabled,
								},
								className,
							)}
							disabled={disabled}
							onClick={onClick}
							type={type}
							{...rest}
						>
							{children}
						</button>
					</Link>
				) : null}
				{!href && (
					<button
						className={classnames(
							styles.btn,
							styles[`btn-size_${size}`],
							styles[`btn-width_${width}`],
							{
								[styles['btn-disabled']]: disabled,
							},
							className,
						)}
						disabled={disabled}
						onClick={onClick}
						type={type}
						{...rest}
					>
						{children}
					</button>
				)}
			</>
		);
	},
);

Button.displayName = 'Button';
