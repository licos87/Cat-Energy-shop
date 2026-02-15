import { Request, Response } from 'express';

import { Program, Result } from '../../../types';
import { programsService } from '../services/programsService';

const getAllPrograms = async (
	req: Request,
	res: Response<Result<Program[]>>,
) => {
	const programs = await programsService.getAllPrograms();

	res.json({
		success: true,
		data: programs,
	});
};

export { getAllPrograms };
