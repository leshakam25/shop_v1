"use client"
import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";

const AuthBlock = () => {
    const {data: session} = useSession();
    return (
        <>
            {!session &&
                <Link href={`/auth/login/`}>
                    <Button
                        variant={'contained'}
                        color={"primary"}
                    >
                        <Typography>Login / Register</Typography>
                    </Button>
                </Link>
            }
            {session &&
                <Box>
                    <Link href={"/use/dashboard"}>
                        <Button
                            variant={'contained'}
                            color={'success'}
                            sx={{m: 0.5}}
                        >
                            <Typography variant={'body1'}>
                                {session?.user?.name}
                            </Typography>
                        </Button>
                    </Link>
                    <Button
                        onClick={() => signOut({callbackUrl: process.env.NEXTAUTH_URL})}
                        variant={'contained'}
                        color={'error'}
                        sx={{m: 0.5}}
                    >
                        <LogoutIcon/>
                    </Button>
                </Box>
            }
        </>

    );
};

export default AuthBlock;