import prisma from "@/libs/prismadb"
import { NextResponse } from "next/server"

export const GET = async () => {
    const allUsers = await prisma.user.findMany({
        include: {
            blog: {
                include:{
                    comments : true
                }
            }
           
        },
    })
    // console.log(allUsers)
    return NextResponse.json({data:allUsers},{status:200})
}