import React from 'react';
import UserList from "@/components/User/UserList";

const getUsers = async (): Promise<any> => {
    try {
        const res = await fetch(`http://localhost:3000/api/user`,
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
    return <main>{users && <UserList data={users.users}/>}</main>
};

export default Page;