import { Request, Response } from 'express';

import { Category, Result } from '../../../types';
import { categoriesService } from '../services/categoriesService';

const getAllCategories = async (
	req: Request,
	res: Response<Result<Category[]>>,
) => {
	const categories = await categoriesService.getAllCategories();

	res.json({
		success: true,
		data: categories,
	});
};

export { getAllCategories };
