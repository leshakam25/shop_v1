import React from 'react';
import LoginForm from "@/components/Auth/LoginForm";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";

const Page = async () => {
    const session = await getServerSession(authOptions)
    if (session) redirect("/auth/dashboard")
    return <main><LoginForm/></main>
};

export default Page;