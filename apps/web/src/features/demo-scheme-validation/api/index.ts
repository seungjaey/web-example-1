import { demoHttpClient } from '@/shared/httpClient';
import {
  GetProductsResponse,
  GetProductsResponseScheme,
} from '@/features/demo-scheme-validation/model/GetProductsResponse';

// TODO: showcase: toggle api endpoint products-v1 -> products-v2
const getProducts = async () => {
  const { data } = await demoHttpClient.get<GetProductsResponse>('/products-v1');
  const parsed = GetProductsResponseScheme.parse(data);
  return parsed.data;
};

export { getProducts };
