import React from 'react';
import UserCreateForm from "@/components/User/UserCreateForm";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Create user | Shop v1.0',
    description: 'User',
}

const Page = () => {
    return <UserCreateForm/>
};

export default Page;