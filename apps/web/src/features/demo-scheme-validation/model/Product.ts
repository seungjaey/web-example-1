import { z } from 'zod';

const ProductScheme = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  tag: z.array(z.string()),
});

type Product = z.infer<typeof ProductScheme>;

export { ProductScheme };
export type { Product };
