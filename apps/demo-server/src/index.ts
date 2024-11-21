import express from 'express';
import cors from 'cors';
import { faker } from '@faker-js/faker';
import { pipe, range, map, toArray } from '@fxts/core';

const app = express();

app.use(cors());

type ValidProduct = {
  id: string;
  name: string;
  price: number;
  tag: string[];
};

type InvalidProduct = {
  id: string;
  name: string;
  price: number;
  tag: string;
};

type CreateProductPredicate = () => ValidProduct | InvalidProduct;

const createProducts = (pred: CreateProductPredicate) => {
  return pipe(range(15), map(pred), toArray);
};

const createValidProduct = () => {
  return {
    id: faker.string.uuid(),
    name: faker.internet.displayName(),
    price: faker.number.int(),
    tag: [faker.internet.username(), faker.internet.username()],
  };
};

const createInvalidProduct = () => {
  return {
    id: faker.string.uuid(),
    name: faker.internet.displayName(),
    price: faker.number.int(),
    tag: faker.internet.username(),
  };
};

app.get('/products-v1', (req, res) => {
  res.json({
    data: createProducts(createValidProduct),
  });
});

app.get('/products-v2', (req, res) => {
  res.json({
    data: createProducts(createInvalidProduct),
  });
});

app.listen(4000, () => {
  console.log('demo-server started 🚀');
});
