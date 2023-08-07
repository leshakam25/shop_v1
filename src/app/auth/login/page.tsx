"use client"
import React from 'react';
import LoginForm from "@/components/Auth/LoginForm";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {getSession} from "next-auth/react";
import {authOptions} from "@/lib/authOptions";

const Page = async () => {
    // const session = await getSession(authOptions)
    // if(session) redirect("/user/dashboard")
    return <main><LoginForm/></main>
};

export default Page;