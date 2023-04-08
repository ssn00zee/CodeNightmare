import { prisma } from "../../../server/db/client"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]"

export default async function handler(req, res){
  const { method } = req

  switch(method) {
    case 'GET': // Modified method to GET
    const session = await getServerSession(req, res, authOptions)


    if (!session){
      res.status(401).json({error: 'Unauthorized'})
      return
    }

    // Use the findMany method to fetch all the posts
    const posts = await prisma.post.findMany()

    res.status(200).json(posts) // Return the posts as a JSON response
    break

    case 'POST': 
    const sessionPost = await getServerSession(req, res, authOptions)

    console.log(sessionPost)


    if (!sessionPost){
      res.status(401).json({error: 'Unauthorized'})
      return
    }
    const { title, content } = req.body

    const post = await prisma.post.create({
      data: {
        title,
        content,
        userId: sessionPost.user.id
      }
    })

    res.status(201).json(post)
    break
    default: 
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}