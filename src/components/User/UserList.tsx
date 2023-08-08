"use client"
import React, {useState} from 'react';
import UserListItem from "@/components/User/UserListItem";
import {Box, Typography} from "@mui/material";
import UserCreateButton from "@/components/User/UserCreateButton";

const UserList =  ({data}: any) => {
    const [userList] = useState(data)
    return (
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
                mb:2
            }}>
                <Typography variant={'h4'}>
                    Пользователи
                </Typography>
                <UserCreateButton/>
            </Box>
            {userList && userList.map((el: any) => (
                <UserListItem key={el._id} el={el}/>
            ))}
        </Box>
    )
}

export default UserList;