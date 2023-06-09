import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"

export default function Profile(){
  return (
    <>

    </>
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