import React from 'react';
import LoginForm from "@/components/Auth/LoginForm";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";

const Page = async () => {
    const session = await getServerSession(authOptions)
    if (session) redirect("/auth/dashboard")
    return (
        <>
            <h3>Авторизуйтесь</h3>
            <LoginForm/>
        </>
    );
};

export default Page;