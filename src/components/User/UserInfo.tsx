"use client"
import React from 'react';
import {Alert, Box, Typography} from "@mui/material";
import {useSession} from "next-auth/react";

const UserInfo = () => {
    const {data: session} = useSession();

    return (
        <Box sx={{my: 2}}>
            <Typography variant={'h3'}>Профиль</Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    background: 'lightgray',
                    p: {xs: 1, sm: 2},
                    borderRadius: 1
                }}
            >
                {session &&
                    <>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography variant={'h6'}>Имя:</Typography>
                            <Typography variant={'h5'}>{session?.user?.name}</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography variant={'h6'}>Email:</Typography>
                            <Typography variant={'h5'}>{session?.user?.email}</Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography variant={'h6'}>Роль:</Typography>
                            {/*<Typography variant={'h5'}>{session?.user?.role}</Typography>*/}
                        </Box>
                    </>
                }
                {!session && <Alert severity="error">Вы не авторизованы</Alert>}
            </Box>
        </Box>
    );
};

export default UserInfo;