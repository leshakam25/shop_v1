import React from 'react';
import RegisterForm from "@/components/Auth/RegisterForm";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {getSession} from "next-auth/react";
import {authOptions} from "@/lib/authOptions";

const Page = async () => {
    // const session = await getSession(authOptions)
    // if(session) redirect("/user/dashboard")
    return <main><RegisterForm/></main>
};

export default Page;