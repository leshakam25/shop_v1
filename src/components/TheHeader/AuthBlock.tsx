"use client"
import React from 'react';
import {Box, Button, Typography} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import Link from "next/link";

const AuthBlock = ({profile}: any) => {
    return (
        <>
            {!profile &&
                <Link href={`/auth/login/`}>
                    <Button
                        variant={'contained'}
                        color={'success'}
                    >
                        <Typography>Login / Register</Typography>
                    </Button>
                </Link>
            }
            {profile &&
                <Box>
                    <Button
                        size={'small'}
                        variant={'contained'}
                        color={'success'}
                    >
                        <Typography variant={'h6'} sx={{
                            mr: 1
                        }}>
                            {profile.name}
                        </Typography>
                        <Typography variant={'body1'}>
                            {profile.email}
                        </Typography>
                    </Button>
                    <Button
                        size={'large'}
                        variant={'contained'}
                        color={'error'}
                        sx={{ml: 2}}
                    >
                        <LogoutIcon/>
                    </Button>
                </Box>
            }
        </>

    );
};

export default AuthBlock;