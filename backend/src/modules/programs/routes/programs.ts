import express from 'express';

import { getALlPrograms } from '../controllers/programs';

const router = express.Router();

router.get('/', getALlPrograms);

export default router;
