"use client"
import React from 'react';
import UserListItem from "@/components/User/UserListItem";
import {Box, Typography} from "@mui/material";

const user = {
    name: "abc",
    email: "email",
    role: "admin",
}

const UserList = () => {
    return (
        <Box sx={{
            my: 2,
            display: "flex",
            flexDirection: "column"
        }}>
            <Typography variant={'h3'}>
                Пользователи
            </Typography>
            <UserListItem user={user}/>
        </Box>
    )
}

export default UserList;