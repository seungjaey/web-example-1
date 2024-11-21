import { useSuspenseQuery } from '@tanstack/react-query';
import { getValidProducts } from '@/features/demo-valid/api';

const useProducts = () => {
  return useSuspenseQuery({
    queryKey: ['demo', 'products'],
    queryFn: getValidProducts,
  });
};

export { useProducts };
