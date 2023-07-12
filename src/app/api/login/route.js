import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
    const { email, password } = req.json();

    if (!email || !password) {
        return null;
    }

    const user = await prisma.user.findUnique({
        where: {
            email,
        }
    })

    if (!user) {
        return res.status(400).json({
            error: "User not found"
        })
    }

    if (user.password === password) {
        return user
    }

    return NextResponse.json({ data: user }, { status: 200 })
}

export const GET = async ( ) => {
   return NextResponse.json({ data: "data display" }, { status: 200 })
}