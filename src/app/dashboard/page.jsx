'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
const Dashboard = () => {
    const { session, status } = useSession();
    console.log(session, status)
    return (
        <div>
            <div className="">dashboard</div>
            {<p>{JSON.stringify(session)}</p>}
            {<p>{status}</p>}

        </div>

    )
}

export default Dashboard