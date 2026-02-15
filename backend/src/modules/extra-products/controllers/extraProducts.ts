import { Request, Response } from 'express';

import { AppError } from '../../../middleware/AppError';
import { idParamSchema } from '../../../middleware/validate';
import { Result } from '../../../types';
import { extraProductsService } from '../services/extraProductsService';
import { ExtraProduct } from '../types';

const getAllExtraProducts = async (
	req: Request,
	res: Response<Result<ExtraProduct[]>>,
) => {
	const extraProducts = await extraProductsService.getAllExtraProducts();

	res.json({
		success: true,
		data: extraProducts,
	});
};

const getExtraProductById = async (
	req: Request<{ id: string }>,
	res: Response<Result<ExtraProduct>>,
) => {
	const { id } = idParamSchema.parse(req.params);

	const product = await extraProductsService.getExtraProductById(id);

	if (!product) {
		throw new AppError(404, 'Product not found');
	}

	res.json({
		success: true,
		data: product,
	});
};

export { getAllExtraProducts, getExtraProductById };
