"use client"
import React, {useState} from 'react';
import useSWR from "swr";
import {getUserById} from "@/user/services/user.service";
import UserEditForm from "@/user/components/UserEditForm";
import Loading from "@/shared/components/Loading/Loading";

interface IUserEditFormProps {
    _id: string;
}

const UserEditWrapper: React.FC<IUserEditFormProps> = ({_id}) => {
    const {data:user, isLoading} = useSWR(`user`, () => getUserById(_id));
    return isLoading ? <Loading/> : <UserEditForm _id={_id} user={user}/>
};

export default UserEditWrapper;