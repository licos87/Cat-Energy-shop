import z from 'zod';

import { ProgramSchemas } from '../schemas/programSchemas';

export type Program = z.infer<typeof ProgramSchemas>;
