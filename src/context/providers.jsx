'use client'
import { SessionProvider } from 'next-auth/react'

export default function Provider({ children ,session}) {
    // console.log(session)
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}