import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
export { AuthOptions } from "next-auth";

import prisma from '@/app/libs/prismadb';

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GithubProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        })
    ]

}