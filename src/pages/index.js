import HeadComp from "@/comps/head"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"
import Share from "@/comps/share"
import { useSession } from "next-auth/react"

export default function Home() {

  const { data: session } = useSession()

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
    <main>
      <section className="bg-white h-screen flex justify-center align-center pt-48">
        <Share />
      </section>
    </main>
    </>
  )
}


export async function getServerSideProps(ctx){

  const session = await getServerSession(ctx.req, ctx.res, authOptions)


  return {
    props: {
      session
    }
  }
} 