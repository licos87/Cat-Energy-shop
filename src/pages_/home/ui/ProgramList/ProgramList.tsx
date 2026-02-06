import React from 'react';

import ProgramCard from '@entities/program';
import { Program } from '@entities/program/model/types/program';
import { ApiRoute } from '@shared/constants';
import { fetchData } from '@shared/lib';
import { Text } from '@shared/ui';

import styles from './ProgramList.module.css';

async function ProgramList() {
	const { data: programs, error } = await fetchData<Program[]>(
		ApiRoute.PROGRAMS,
	);

	if (error) {
		return (
			<section className={styles.errorState}>
				<Text>⚠️ Программы временно недоступны</Text>
				<Text>Попробуйте обновить страницу</Text>
			</section>
		);
	}

	return (
		<section>
			<ul className={styles.programsList}>
				{programs.map((program) => (
					<li key={program.id}>
						<ProgramCard program={program} />
					</li>
				))}
			</ul>
		</section>
	);
}

export default ProgramList;
