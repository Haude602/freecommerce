import { NextApiRequest, NextApiResponse } from 'next'

const products = [
  {
    id: 1,
    name: "Just Another Product",
    price: 2000,
    star: 4,
    review: 200,
    img: "http://localhost:3000/images/items/1.jpg",
  },
  {
    id: 2,
    name: "Just Another Product",
    price: 2000,
    star: 4,
    review: 200,
    img: "http://localhost:3000/images/items/1.jpg",
  },
  {
    id: 3,
    name: "Just Another Product",
    price: 2000,
    star: 4,
    review: 200,
    img: "http://localhost:3000/images/items/1.jpg",
  },
  {
    id: 4,
    name: "Just Another Product",
    price: 2000,
    star: 4,
    review: 200,
    img: "http://localhost:3000/images/items/1.jpg",
  },
];
export default function handler(req:NextApiRequest, res:NextApiResponse) {
  const { productId } = req.query;
  const product = products.find((product) => product.id === +productId);
  res.status(200).json({ productId, product });
}
