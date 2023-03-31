import { prisma } from "../../../server/db/client";

export default async function handler(req, res){
  const { method } = req

  switch(method) {
    case 'POST': 
    const { title, content } = req.body

    const post = await prisma.post.create({
      data: {
        title,
        content
      }
    })

    res.status(201).json(post)
    break
    default: 
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}