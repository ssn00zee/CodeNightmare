import { prisma } from "../../../../server/db/client"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

export default async function handler(req, res) {

  const { method } = req
  switch(method) {
    case 'GET': // Modified method to GET
    const session = await getServerSession(req, res, authOptions)
    if (!session){
      res.status(401).json({error: 'Unauthorized'})
      return
    }

    const comments = await prisma.comment.findMany({
      include: {
        user: true
      }
    })
    res.status(200).json(comments) // Return the comments as a JSON response
    break
    case 'POST':
    const sessionPost = await getServerSession(req, res, authOptions)
    if (!sessionPost){
      res.status(401).json({error: 'Unauthorized'})
      return 
    }
    const { postId, content } = req.body
    const comment = await prisma.comment.create({
      data: {
        content,
        postId: parseInt(postId),
        userId: sessionPost.user.id
      }
    })
    res.status(201).json(comment)
    break
    default:
      res.status(405).end(`Method ${method} Not Allowed`)
  }

}