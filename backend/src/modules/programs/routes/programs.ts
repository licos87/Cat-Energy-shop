import express from 'express';

import { getAllPrograms } from '../controllers/programs';

const router = express.Router();

router.get('/', getAllPrograms);

export default router;
