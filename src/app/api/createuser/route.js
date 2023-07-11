import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"
export const POST = async (req, res) => {
    const { name, email, password, blog } = await req.json()
    const { title, body, slug, comments } = blog
    const { comment } = comments
    const createUser = await prisma.user.create({
        data: {
            name,
            email,
            password,
            blog: {
                create: {
                    title,
                    body,
                    slug,
                    comments: {
                        create: {
                            comment
                        }
                    }
                }
            }
        }
    })


    return NextResponse.json({ data: createUser }, { status: 201 })
}

