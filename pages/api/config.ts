import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req:NextApiRequest, res:NextApiResponse) {
  const categories = [
    {
      name: "All",
      slug: null,
    },
    { name: "Fashion", slug: "fashion" },
    { name: "Electronics", slug: "electronics" },
  ];
  res.status(200).json({ categories });
}
