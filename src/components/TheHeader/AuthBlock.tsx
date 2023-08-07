"use client"
import React from 'react';
import {Box, Button, Tooltip, Typography} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";

const AuthBlock = () => {
        const {data: session} = useSession();
        return (
            <>
                {!session &&
                    <Link href={`/auth/login/`}>
                        <Tooltip title={"Авторизация"}>
                            <Button
                                variant={'contained'}
                                color={"primary"}
                            >
                                <Typography> Login / Register</Typography>
                            </Button>
                        </Tooltip>
                    </Link>
                }
                {
                    session &&
                    <Box>
                        <Link href={"/user/dashboard"}>
                            <Tooltip title={"Профиль"}>
                                <Button
                                    variant={'contained'}
                                    color={'success'}
                                    sx={{m: 0.5}}
                                >
                                    <Typography variant={'body1'}>
                                        {session?.user?.name}
                                    </Typography>
                                </Button>
                            </Tooltip>
                        </Link>
                        <Tooltip title={"Выйти"}>
                            <Button
                                onClick={() => signOut({callbackUrl: process.env.BASE_URL})}
                                variant={'contained'}
                                color={'error'}
                                sx={{m: 0.5}}
                            >
                                <LogoutIcon/>
                            </Button>
                        </Tooltip>
                    </Box>
                }
            </>

        )
            ;
    }
;

export default AuthBlock;