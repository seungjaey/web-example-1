import { useProducts } from '@/features/demo-scheme-validation/hooks/useProducts';
import { ProductCard } from '@/features/demo-scheme-validation/ui/ProductCard';

const ProductList = () => {
  const { data } = useProducts();
  return data.map((product) => {
    const { id } = product;
    return <ProductCard key={id} product={product} />;
  });
};

export { ProductList };
