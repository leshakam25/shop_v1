"use client"
import useSWR from "swr";
import React from 'react';
import {User} from "next-auth";
import {Box, Typography} from "@mui/material";
import Loading from "@/shared/components/Loading/Loading";
import UserListItem from "@/user/components/UserListItem";
import UserCreateButton from "@/user/components/UserCreateButton";
import {getAllUsers} from "@/user/services/user.service";

const UserList = () => {
    const {data: users, isLoading} = useSWR("users", getAllUsers)
    return isLoading ? <Loading/> : (
        <Box sx={{
            my: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2
            }}>
                <Typography variant={'h4'}>
                    Пользователи
                </Typography>
                <UserCreateButton/>
            </Box>
            {users && users.map((el: User) => (<UserListItem key={el._id} el={el}/>))}
        </Box>
    )
}

export default UserList;