"use client"
import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import Link from "next/link";
import {useSession} from "next-auth/react";

const SignInButton = () => {
    const {data: session} = useSession()

    if (session && session.user) return (
        <Box sx={{
            my: 2,
            display: 'flex',
            flexDirection: 'column',
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
                <Button>Выйти</Button>
            </Link>
        </Box>
    )
    return (
        <Box sx={{
            my: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: {xs: '100vw', sm: '200px'},
            gap: 1,
            borderRadius: 2
        }}>
            <Link href={'/api/auth/signin'}>Sign In</Link>
            <Link href={'/signup'}>Sign Up</Link>
        </Box>
    )
}