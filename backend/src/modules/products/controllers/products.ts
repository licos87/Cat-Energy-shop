import { Request, Response } from 'express';

import { AppError } from '../../../middleware/AppError';
import { idParamSchema } from '../../../middleware/validate';
import { Result } from '../../../types';
import { productsService } from '../services/productsService';
import { Product } from '../types';

const getAllProducts = async (
	req: Request,
	res: Response<Result<Product[]>>,
) => {
	const products = await productsService.getAllProducts();

	res.json({
		success: true,
		data: products,
	});
};

const getProduct = async (
	req: Request<{ id: string }>,
	res: Response<Result<Product>>,
) => {
	const { id } = idParamSchema.parse(req.params);

	const product = await productsService.getProductById(id);

	if (!product) {
		throw new AppError(404, 'Product not found');
	}

	res.json({
		success: true,
		data: product,
	});
};

export { getAllProducts, getProduct };
