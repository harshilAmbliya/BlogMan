import prisma from "@/libs/prismadb";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers/credentials";


export const authOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        stratrgy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            Credential: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: {
                    label: "Password", type: "password", placeholder: "enter your password"
                },
                email: { label: "Email", type: "email", placeholder: "Enter your email address" }
            },
            async authorize() {
                if (!Credential.email || Credential.password) {
                    return null;
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: Credential.email
                    }
                })

                if (!user) {
                    return null;
                }

                return user
            }
        })

    ], secert: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
}


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }