import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    const body = await req.json();
    // console.log(req)
    const { name, email, password } = body
    console.log(body)

    if (!name  || !email || !password) {
        return new NextResponse.json({ status: 400 }, { error: "missing required" })
    }

    const existUser = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (existUser) {
        return new NextResponse.json({ status: 400 }, { error: "user already exists" })
    }

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password
        }
    })

    return NextResponse.json(user)
}