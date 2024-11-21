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

const getInValidProducts = async () => {
  const { data } = await demoHttpClient.get<Response>('/products-v2');
  return data.data;
};

export { getInValidProducts };
