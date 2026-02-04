import compression from 'compression';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import rateLimit from 'express-rate-limit';

import { AppRoute } from './constants/apiRoutes';
import categoriesRouter from './modules/categories';
import programsRouter from './modules/programs';


const app: Application = express();
const PORT = process.env.SERVER_PORT || 3001;

app.use(compression());
app.use(cors());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(AppRoute.MAIN, (req: Request, res: Response) => {
	res.json({ success: true, message: 'Сервер запущен' });
});

app.use(AppRoute.PROGRAMS, programsRouter);
app.use(AppRoute.CATEGORIES, categoriesRouter);

async function startApp() {
	try {
		app.listen(PORT, () => console.log(`🚀 Server: http://localhost:${PORT}`));
	} catch (error) {
		console.error(error);
	}
}

startApp();
