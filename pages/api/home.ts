
import { NextApiRequest, NextApiResponse } from 'next'
const data = {
  popular: [
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
  ],
  new: [
    {
      name: "Just Another Product",
      price: 2000,
      star: 4,
      review: 200,
      img: "http://localhost:3000/images/items/1.jpg",
    },
    {
      name: "Just Another Product",
      price: 2000,
      star: 4,
      review: 200,
      img: "http://localhost:3000/images/items/1.jpg",
    },
    {
      name: "Just Another Product",
      price: 2000,
      star: 4,
      review: 200,
      img: "http://localhost:3000/images/items/1.jpg",
    },
    {
      name: "Just Another Product",
      price: 2000,
      star: 4,
      review: 200,
      img: "http://localhost:3000/images/items/1.jpg",
    },
  ],
  recommended: [
    {
      name: "Just Another Product",
      price: 2000,
      img: "http://localhost:3000/images/items/1.jpg",
    },
    {
      name: "Just Another Product",
      price: 2000,
      img: "http://localhost:3000/images/items/1.jpg",
    },
    {
      name: "Just Another Product",
      price: 2000,
      img: "http://localhost:3000/images/items/1.jpg",
    },
    {
      name: "Just Another Product",
      price: 2000,
      img: "http://localhost:3000/images/items/1.jpg",
    },
  ],
};
export default function handler(req:NextApiRequest, res:NextApiResponse) {
  res.status(200).json(data);
}
