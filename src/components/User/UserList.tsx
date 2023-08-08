import React, {useState} from 'react';
import UserListItem from "@/components/User/UserListItem";
import {Box, Typography} from "@mui/material";
import UserCreateButton from "@/components/User/UserCreateButton";


const getUsers = async (): Promise<any> => {
    const url = `${process.env.BASE_URL}/api/user`
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

const UserList = async () => {
    const users = await getUsers()
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
            {users && users.users.map((el: any) => (
                <UserListItem key={el._id} el={el}/>
            ))}
        </Box>
    )
}

export default UserList;