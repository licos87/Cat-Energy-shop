import z from 'zod';

import { ProductSchemas } from '../schemas/productSchemas';

export type Product = z.infer<ProductSchemas>;
