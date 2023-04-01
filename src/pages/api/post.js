import { prisma } from "../../../server/db/client"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]"

export default async function handler(req, res){
  const { method } = req

  switch(method) {
    case 'POST': 
    const session = await getServerSession(req, res, authOptions)

    console.log(session)


    if (!session){
      res.status(401).json({error: 'Unauthorized'})
      return
    }
    const { title, content } = req.body

    const post = await prisma.post.create({
      data: {
        title,
        content,
        userId: session.user.id
      }
    })

    res.status(201).json(post)
    break
    default: 
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}