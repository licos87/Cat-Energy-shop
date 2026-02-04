import React, { createElement, HTMLAttributes, JSX } from 'react';

import classnames from 'classnames';

import styles from './Text.module.css';

interface TextProps extends HTMLAttributes<HTMLElement> {
	tag?: keyof JSX.IntrinsicElements;
	weight?: 'bold' | 'semi-bold' | 'medium' | 'regular' | 'light';
	size?: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
	children: string;
}

const Text: React.FC<TextProps> = ({
	tag = 'p',
	weight = 'regular',
	children,
	className,
	size,
	...props
}) => {
	const textClasses = classnames(
		styles.text,
		styles[tag],
		size && styles[size],
		weight && styles[weight],
		className,
	);

	return createElement(tag, { className: textClasses, ...props }, children);
};

export { Text };
