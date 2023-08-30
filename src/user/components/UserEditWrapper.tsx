"use client"
import React from 'react';
import useSWR from "swr";
import {getUserById} from "@/user/services/user.service";
import UserEditForm from "@/user/components/UserEditForm";
import Loading from "@/shared/components/Loading/Loading";

interface IUserEditFormProps {
    _id: string;
}

const UserEditWrapper: React.FC<IUserEditFormProps> = ({_id}) => {
    const {data: user, isLoading} = useSWR(`users`, () => getUserById(_id));
    console.log("user", user);

    return isLoading ? <Loading/> : <UserEditForm user={user}/>
};

export default UserEditWrapper;