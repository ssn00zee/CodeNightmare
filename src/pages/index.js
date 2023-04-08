import HeadComp from "@/comps/head"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"
import Share from "@/comps/share"
import { useSession } from "next-auth/react"
import Profile from "@/comps/profile"
import { useState, useEffect } from "react"
import axios from "axios"
import Feed from "@/comps/feed"

export default function Home({
  allPosts
}) {

  

  const { data: session } = useSession()
  const [posts, setPosts] = useState(allPosts)

  useEffect(() => {
    // console.log(posts, 'useEffect')
    // setPosts(posts)
    console.log(allPosts, 'useEffect')
  }, [posts])

  if (!session){
    return (
      <>
      <HeadComp />
      <main>
        <section className="bg-white h-screen flex justify-center align-center pt-48">
          <h1 className="text-4xl font-bold">Welcome to Facebook</h1>
        </section>
      </main>
      </>
    )
  }

  return (
    <>
    <HeadComp />
    <main className="h-screen">
      <section className="bg-white flex justify-center align-center pt-24 gap-16">
        <Profile session={session}/>
        <Share messageData={(messageData) => setPosts([...posts, messageData])} />
      </section>
      <section className="flex justify-center pt-24">
        <Feed posts={posts} />
      </section>
    </main>
    </>
  )
}


export async function getServerSideProps(ctx){

  const session = await getServerSession(ctx.req, ctx.res, authOptions)

  try {
    if (!session){
      return {
        redirect: {
          destination: '/api/auth/signin',
          permanent: false
        }
      }
    }
  } catch (error) {
    console.log(error)
  }

  const res = await axios.get(process.env.AXIOS_URL, {
    headers: {
      cookie: ctx.req.headers.cookie
    }
  })

  try {
    if (!res.data){
      return {
        redirect: {
          destination: '/api/auth/signin',
          permanent: false
        }
      }
    }
  } catch (error) {
    console.log(error)
  }
  
  const allPosts = await res.data


  return {
    props: {
      session,
      allPosts
    }
  }
} 