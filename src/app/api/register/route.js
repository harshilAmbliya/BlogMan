import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    const body = await req.json();
    const { firstName, lastName, email, password } = body.formData
    console.log(body)

    if (!firstName || !lastName || !email || !password) {
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
            firstName,
            lastName,
            email,
            password
        }
    })

    return NextResponse.json(user)
}