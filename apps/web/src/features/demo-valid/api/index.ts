import { demoHttpClient } from '@/shared/httpClient';

type Product = {
  id: string;
  name: string;
  price: number;
  tag: string[];
};

type Response = {
  data: Product[];
};

const getValidProducts = async () => {
  const { data } = await demoHttpClient.get<Response>('/products-v1');
  return data.data;
};

export { getValidProducts };
