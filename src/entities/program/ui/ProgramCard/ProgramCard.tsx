import React from 'react';

import { Image } from 'next/dist/client/image-component';

import { ApiRoute, RoutePath } from '@shared/constants';
import { fetchData } from '@shared/lib';
import { Category } from '@shared/types';
import { Button, Text } from '@shared/ui';

import { Program } from '../../model/types/program';
import styles from './ProgramCard.module.css';

interface ProgramCardProps {
	program: Program;
}

async function ProgramCard({ program }: ProgramCardProps) {
	const { data: categories } = await fetchData<Category[]>(ApiRoute.CATEGORIES);

	const category = categories.find((item) => item.id === program.category_id);

	return (
		<div className={styles.card}>
			<div className={styles.titleContainer}>
				{program.icon && (
					<Image
						className={styles.titleImage}
						src={program.icon}
						alt=""
						width={66}
						height={50}
					/>
				)}
				<Text
					className={styles.title}
					tag="h3"
					size="l"
				>
					{program.name}
				</Text>
			</div>
			{program.description && (
				<Text
					size="xxs"
					className={styles.description}
				>
					{program.description}
				</Text>
			)}
			{category && (
				<Button
					href={{
						pathname: RoutePath.CATALOG,
						query: { category_id: category.id },
					}}
					className={styles.link}
				>
					<span className={styles.linkText}>Каталог {category.name}</span>
					<svg className={styles.linkImg}>
						<defs>
							<marker
								id="m"
								markerWidth="3"
								markerHeight="5.5"
								refX="0"
								refY="1"
								viewBox="0 0 1 2"
							>
								<polygon
									points="0,0 1,1 0,2"
									fill="black"
								/>
							</marker>
						</defs>
						<line
							x1="0"
							y1="50%"
							x2="100%"
							y2="50%"
							strokeWidth="2"
							markerEnd="url(#m)"
							stroke="black"
						/>
					</svg>
				</Button>
			)}
		</div>
	);
}

export default ProgramCard;
