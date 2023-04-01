import HeadComp from "@/comps/head"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"

export default function Home() {
  return (
    <>
    <HeadComp />
    <main>
      <section className="bg-white h-screen">

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