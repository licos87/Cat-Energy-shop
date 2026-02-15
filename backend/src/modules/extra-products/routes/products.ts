import express from 'express';

import { getAllExtraProducts, getExtraProductById } from '../controllers/extraProducts';

const router = express.Router();

router.get('/', getAllExtraProducts);
router.get('/:id', getExtraProductById);

export default router;
