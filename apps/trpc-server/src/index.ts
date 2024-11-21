import { pipe, map, range, toArray } from '@fxts/core';
import { faker } from '@faker-js/faker';
import { router, publicProcedure } from './trpc';
import { z } from 'zod';
import { createHTTPServer } from '@trpc/server/adapters/standalone';

type ValidProduct = {
  id: string;
  name: string;
  price: number;
  tag: string[];
};

type CreateProductPredicate = () => ValidProduct;

const createProducts = (pred: CreateProductPredicate): ValidProduct[] => {
  return pipe(range(15), map(pred), toArray);
};

const createValidProduct = (name?: string) => {
  return {
    id: faker.string.uuid(),
    name: name || faker.internet.displayName(),
    price: faker.number.int(),
    tag: [faker.internet.username(), faker.internet.username()],
  };
};

const appRouter = router({
  products: publicProcedure.query((): ValidProduct[] => {
    return createProducts(createValidProduct);
  }),
  productById: publicProcedure.input(z.string()).query((opts) => {
    const { input } = opts;
    return createValidProduct(input);
  }),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  router: appRouter,
});

server.listen(5000, () => {
  console.log('TRPC Server has been started 🚀');
});
