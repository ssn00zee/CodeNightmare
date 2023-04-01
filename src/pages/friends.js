import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"

export default function Friends() {
  return (
    <main className="h-screen">
      <section className="flex flex-col items-center justify-center h-full">
        <h1 className="text-9xl font-bold">Friends</h1>
      </section>
    </main>
  )
}

export async function getServerSideProps(ctx){

  const session = await getServerSession(ctx.req, ctx.res, authOptions)

  if (!session){
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}