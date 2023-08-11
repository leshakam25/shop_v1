import React from 'react';
import UserList from "@/components/User/UserList";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'User`s list | Shop v1.0',
    description: 'User',
}


const getUsers = async (): Promise<any> => {
    const url = `${process.env.REQUEST_URL}/user/`
    try {
        const res = await fetch(url,
            {
                // next: {revalidate: 60},
                cache: "no-store"
            });
        if (!res.ok) {
            throw new Error("Failed to fetch")
        }
        return res.json()
    } catch (error) {
        console.log("Error loading products: ", error)
    }
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