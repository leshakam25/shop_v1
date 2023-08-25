import React from 'react';
import {Metadata, NextPage} from "next";
import UserEditForm from "@/user/components/UserEditForm";
import {Params} from "@/shared/interfaces/params.interface";

export const metadata: Metadata = {
    title: 'Edit user | Shop v1.0',
    description: 'User',
}

const UserEditPage: NextPage<Params> = async ({params}) => {
    const {_id} = params;
    return <UserEditForm _id={_id}/>
};

export default UserEditPage;