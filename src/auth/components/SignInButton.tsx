"use client"
import React from 'react';
import {Box, Button, Tooltip, Typography} from "@mui/material";
import Link from "next/link";
import {useSession} from "next-auth/react";
import {usePathname} from "next/navigation";
import LoginIcon from '@mui/icons-material/Login';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LogoutIcon from '@mui/icons-material/Logout';

export const SignInButton = () => {
    const {data: session} = useSession()
    console.log(session)

    if (session && session.user) return (
        <Box sx={{
            my: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: {xs: '100vw', sm: '200px'},
            gap: 1,
            borderRadius: 2
        }}>
            <Typography variant={'h5'} sx={{
                opacity: 0.6
            }}>
                {session.user.name}
            </Typography>
            <Link href={'/api/auth/signout'}>
                <Button
                    variant={'contained'}
                    color={"warning"}
                    sx={{m: 0.5}}
                >
                    <LogoutIcon/>
                </Button>
            </Link>
        </Box>
    )

    return (
        <Box sx={{
            my: 2,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: {xs: '100vw', sm: '200px'},
            gap: 1,
            borderRadius: 2
        }}>
            <Link href={'/api/auth/signin'}>
                <Button variant={'contained'} color={"primary"} sx={{m: 0.5}}>
                    <Tooltip title={'Вход'}>
                        <LoginIcon/>
                    </Tooltip>
                </Button>
            </Link>
            <Link href={'/signup'}>
                <Tooltip title={'Регистрация'}>
                    <Button variant={'contained'} color={"primary"} sx={{m: 0.5}}>
                        <HistoryEduIcon/>
                    </Button>
                </Tooltip>
            </Link>
        </Box>
    )
}