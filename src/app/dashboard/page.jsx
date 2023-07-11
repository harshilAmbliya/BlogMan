'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
const Dashboard = () => {
    const { data: session, status } = useSession();
    console.log(session, status)
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard