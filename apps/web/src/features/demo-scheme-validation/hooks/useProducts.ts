import { useSuspenseQuery } from '@tanstack/react-query';
import { getProducts } from '@/features/demo-scheme-validation/api';

const useProducts = () => {
  return useSuspenseQuery({
    queryKey: ['demo', 'invalid', 'products'],
    queryFn: getProducts,
  });
};

export { useProducts };
