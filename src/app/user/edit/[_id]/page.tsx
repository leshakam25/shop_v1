import React from 'react';
import UserEditForm from "@/components/User/UserEditForm";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Edit user | Shop v1.0',
    description: 'User',
}

const getUserById = async (_id: string) => {
    const url = `${process.env.BASE_URL}/api/user/${_id}`
    try {
        const res = await fetch(url, {
            cache: 'no-store'
        })

        if (!res.ok) {
            throw new Error("Failed to fetch user")
        }
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const EditUser = async ({params}: any) => {
    const {_id} = params;
    const {user} = await getUserById(_id);
    return <main><UserEditForm user={user}/></main>
};

export default EditUser;