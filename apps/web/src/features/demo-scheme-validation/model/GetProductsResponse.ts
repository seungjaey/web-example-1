import { z } from 'zod';
import { ProductScheme } from '@/features/demo-scheme-validation/model/Product';

const GetProductsResponseScheme = z.object({
  data: z.array(ProductScheme),
});

type GetProductsResponse = z.infer<typeof GetProductsResponseScheme>;

export { GetProductsResponseScheme };
export type { GetProductsResponse };
