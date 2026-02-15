import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

import { AppError } from './AppError';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	if (err instanceof AppError) {
		res.status(err.statusCode).json({
			success: false,
			message: err.message,
		});
		return;
	}

	if (err instanceof ZodError) {
		res.status(400).json({
			success: false,
			message: 'Validation error',
			errors: err.issues,
		});
		return;
	}

	console.error(err);
	res.status(500).json({
		success: false,
		message: 'Internal server error',
	});
};
