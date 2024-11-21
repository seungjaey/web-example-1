import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@root/trpc-server/src/index';
//     👆 **type-only** import

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:5000',
    }),
  ],
});

const test = async () => {
  const data = await trpc.products.query();
};

export { trpc };
