import { useSuspenseQuery } from '@tanstack/react-query';
import { getInValidProducts } from '@/features/demo-invalid/api';

const useProducts = () => {
  return useSuspenseQuery({
    queryKey: ['demo', 'invalid', 'products'],
    queryFn: getInValidProducts,
  });
};

export { useProducts };
