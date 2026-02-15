import z from 'zod';

import { ExtraProductSchemas } from '../schemas/extraProductSchemas';

export type ExtraProduct = z.infer<ExtraProductSchemas>;
