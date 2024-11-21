import { getValidProducts } from '@/features/demo-valid/api';

type Props = {
  product: Awaited<ReturnType<typeof getValidProducts>>[0];
};

const ProductCard = ({ product }: Props) => {
  const { name, price, tag } = product;
  return (
    <div key={product.id} className="group relative border-2 p-2">
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{price}</p>
        </div>
      </div>
      <ul className="flex flex-row items-center text-sm font-medium text-gray-900">
        {tag.map((tag) => (
          <li key={tag}>
            <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ProductCard };
