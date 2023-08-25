import React from 'react';
import {Metadata} from "next";
import UserList from "@/user/components/UserList";

export const metadata: Metadata = {
    title: 'User`s list | Shop v1.0',
    description: 'User',
}

const UserListPage = () => {
    return <UserList/>
};

export default UserListPage;