import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import { prisma } from '../../../../server/db/client'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ],
  callbacks: {
    session: async ({session, user}) => {
      session.user.id = user.id
      return Promise.resolve(session)
    }
  },
  secret: process.env.NEXT_AUTH_SECRET
}

export default NextAuth(authOptions) 