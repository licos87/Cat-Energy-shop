import React from 'react';

import ProgramCard from '@entities/programs';
import { Program } from '@entities/programs/model/types/program';
import { ApiRoute } from '@shared/constants';
import { useFetch } from '@shared/hooks';

function ProgramList() {
	const {
		data: programs,
		loading,
		error,
	} = useFetch<Program[]>(ApiRoute.PROGRAMS);

	if (loading) return <div>123</div>;
	return (
		<section>
			<ul>
				{(programs || []).map((program) => (
					<li key={program.id}>
						<ProgramCard program={program} />
					</li>
				))}
			</ul>
		</section>
	);
}

export default ProgramList;
