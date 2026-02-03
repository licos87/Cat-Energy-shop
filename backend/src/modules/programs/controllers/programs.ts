import { Request, Response } from 'express';
import { Program, Result } from '../../../types';
import { prisma } from '../../../services/prisma';

export const getALlPrograms = async (
	req: Request,
	res: Response<Result<Program[]>>,
) => {
	try {
		const programs = await prisma.programs.findMany({
			orderBy: {
				category_id: 'desc',
			},
		});

		res.json({
			success: true,
			data: programs,
		});
	} catch (error) {
		console.error('Ошибка  получения данных из БД. Programs:', error);
		res.status(500).json({
			success: false,
			message: `Ошибка сервера. Programs: ${error}`,
		});
	}
};
