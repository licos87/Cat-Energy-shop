import React, { createElement, HTMLAttributes, JSX } from 'react';



import classnames from 'classnames';



import styles from './Text.module.css';


interface TextProps extends HTMLAttributes<HTMLElement> {
	tag?: keyof JSX.IntrinsicElements;
	weight?: string;
}

const Text: React.FC<TextProps> = ({
	tag = 'p',
	weight,
	children,
	className,
	...props
}) => {
	const textClasses = classnames(
		styles.text,
		styles[`text_${tag}`],
		{ [styles[`text_${weight}`]]: weight },
		className,
	);

	return createElement(tag, { className: textClasses, ...props }, children);
};

export { Text };
