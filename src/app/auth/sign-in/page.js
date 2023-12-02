"use client"

import React from 'react'
import { useEffect } from 'next/router'
import { signIn, useSession } from 'next-auth/client'


export default function page() {

    const { data: session, stautus, loading } = useSession();

    useEffect(() => {
        if (!loading && !session) void signIn('google')
        if (!loading && session) window.close()
    }, [loading, session])
    return (
        <div
            className={"bg-white dark:bg-gray-900"}
            style={{
                width: "100vw",
                height: "100vh",
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 1500,
            }}
        ></div>
    );

}
