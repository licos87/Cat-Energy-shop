import { Request, Response } from 'express';
import { Category, Result } from '../../../types';
import { prisma } from '../../../services/prisma';

export const getAllCategories = async (
	req: Request,
	res: Response<Result<Category[]>>,
) => {
	try {
		const categories = await prisma.categories.findMany();

		res.json({
			success: true,
			data: categories,
		});
	} catch (error) {
		console.error('Ошибка  получения данных из БД. Programs:', error);
		res.status(500).json({
			success: false,
			message: `Ошибка сервера. Programs: ${error}`,
		});
	}
};
