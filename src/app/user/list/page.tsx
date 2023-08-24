import React from 'react';
import UserList from "@/user/components/UserList";
import {Metadata} from "next";
import {getUsers} from "@/user/services/user.service";

export const metadata: Metadata = {
    title: 'User`s list | Shop v1.0',
    description: 'User',
}

const Page = async () => {
    const users = await getUsers()
    return (
        <>
            {users && <UserList data={users}/>}
        </>
    )
};

export default Page;