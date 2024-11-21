import { useProducts } from '@/features/demo-invalid/hooks/useProducts';
import { ProductCard } from '@/features/demo-invalid/ui/ProductCard';

const ProductList = () => {
  const { data } = useProducts();
  return data.map((product) => {
    const { id } = product;
    return <ProductCard key={id} product={product} />;
  });
};

export { ProductList };
