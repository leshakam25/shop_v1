import React from 'react';
import UserEditForm from "@/components/User/UserEditForm";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Edit user | Shop v1.0',
    description: 'User',
}

const getUserById = async (_id: string) => {
    const url = `${process.env.REQUEST_URL}/user/${_id}`
    try {
        const res = await fetch(url, {
            cache: 'no-store'
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const EditUser = async ({params}: any) => {
    const {_id} = params;
    const {user} = await getUserById(_id);
    return <>{user && <UserEditForm user={user}/>}</>
};

export default EditUser;