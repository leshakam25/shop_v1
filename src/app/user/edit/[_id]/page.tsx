import React from 'react';
import UserEditForm from "@/user/components/UserEditForm";
import {Metadata, NextPage} from "next";
import {User} from "@/user/interfaces/user.interface";

interface Params {
    params: {
        _id: string;
    };
}

export const metadata: Metadata = {
    title: 'Edit user | Shop v1.0',
    description: 'User',
}

const getUserById = async (_id: string): Promise<User | undefined> => {
    const url = `http://localhost:4000/user/${_id}`
    try {
        const res = await fetch(url, {
            cache: 'no-store'
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const EditUser: NextPage<Params> = async ({params}) => {
    const {_id} = params;
    const {user}: any = await getUserById(_id);
    console.log(user)
    return <>{user && <UserEditForm user={user}/>}</>
};

export default EditUser;