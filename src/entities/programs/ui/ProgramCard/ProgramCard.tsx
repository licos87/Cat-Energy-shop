import React from 'react';

import { Program } from '../../model/types/program';

interface ProgramCardProps {
	program: Program;
}

function ProgramCard({ program }: ProgramCardProps) {
	return <div>{program.name}</div>;
}

export default ProgramCard;
