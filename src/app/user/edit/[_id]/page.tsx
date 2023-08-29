import React from 'react';
import {Metadata, NextPage} from "next";
import {Params} from "@/shared/interfaces/params.interface";
import UserEditWrapper from "@/user/components/UserEditWrapper";

export const metadata: Metadata = {
    title: 'Edit user | Shop v1.0',
    description: 'User',
}

const UserEditPage: NextPage<Params> = async ({params}) => {
    const {_id} = params;
    return <UserEditWrapper _id={_id}/>
};

export default UserEditPage;