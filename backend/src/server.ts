import path from 'node:path';

import compression from 'compression';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

import { AppRoute } from './constants/apiRoutes';
import { errorHandler } from './middleware/errorHandler';
import categoriesRouter from './modules/categories';
import productsRouter from './modules/products';
import programsRouter from './modules/programs';
import extraProductsRouter from './modules/extra-products';

const app: Application = express();
const PORT = process.env.SERVER_PORT || 3001;

app.use(compression());
app.use(helmet());
app.use(cors());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(path.join(__dirname, '../static/images')));
app.use('/icon', express.static(path.join(__dirname, '../static/icon')));

app.get(AppRoute.MAIN, (req: Request, res: Response) => {
	res.json({ success: true, message: 'Сервер запущен' });
});

app.use(AppRoute.PROGRAMS, programsRouter);
app.use(AppRoute.CATEGORIES, categoriesRouter);
app.use(AppRoute.PRODUCTS, productsRouter);
app.use(AppRoute.EXTRA_PRODUCTS, extraProductsRouter);

app.use(errorHandler);

async function startApp() {
	try {
		app.listen(PORT, () => console.log(`🚀 Server: http://localhost:${PORT}`));
	} catch (error) {
		console.error(error);
	}
}

startApp();
