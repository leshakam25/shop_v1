"use client"
import React from 'react';
import LoginForm from "@/components/Auth/LoginForm";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {authOptions} from "@/utils/authOptions";

const Page = async () => {
    const session = await getServerSession(authOptions)
    if (session) redirect(`/user/dashboard`)
    return <main><LoginForm/></main>
};

export default Page;