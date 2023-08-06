"use client"
import React from 'react';
import {Alert, Box, Typography} from "@mui/material";
import {useSession} from "next-auth/react";

const UserInfo = () => {
    const {data: session} = useSession();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                background: 'lightgray',
                mt:2,
                py: {xs: 1, sm: 2},
                borderRadius: 1
            }}
        > {session &&
            <>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography variant={'h6'}>Имя:</Typography>
                    <Typography variant={'h6'}>{session?.user?.name}</Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Typography variant={'h6'}>Email:</Typography>
                    <Typography variant={'h6'}>{session?.user?.email}</Typography>
                </Box>
            </>
        }
            {!session && <Alert severity="error">Вы не авторизованы</Alert>}
        </Box>
    );
};

export default UserInfo;