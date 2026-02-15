import React from 'react';



import styles from './Skeleton.module.css';


interface SkeletonProps {
	width: number | string;
	height: number | string;
	style?: object
}

function Skeleton({ width, height, style, ...props }: SkeletonProps) {
	return (
		<div
			className={styles.element}
			style={{ width: width, height: height, ...style }}
			{...props}
		/>
	);
}

export { Skeleton };
