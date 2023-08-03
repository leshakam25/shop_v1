"use client"
import React from 'react';
import {Box, IconButton, Typography} from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from "next/link";

const HeaderAuthBlock = ({profile}: any) => {
    return (
        <>
            {!profile &&
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    background: 'pink',
                    px: 2,
                    py: 0.5,
                    outline: '1px solid white',
                }}>
                    <Typography variant={'h6'}>
                        "Please auth"
                    </Typography>
                    <IconButton sx={{
                        ml: 1
                    }}>
                        <Link href={`/auth/login/`}>
                            <LoginIcon color={'success'}/>
                        </Link>
                    </IconButton>
                </Box>}
            {profile &&
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    background: 'lightgreen',
                    outline: '1px solid white',
                    px: 2,
                    py: 0.5
                }}>

                    <Typography variant={'h5'} sx={{
                        mr: 2
                    }}>
                        {profile.name}
                    </Typography>
                    <Typography variant={'h6'} sx={{
                        mx: 1
                    }}>
                        {profile.email}
                    </Typography>
                    <IconButton color={'error'}>
                        <LogoutIcon/>
                    </IconButton>
                </Box>}
        </>

    );
};

export default HeaderAuthBlock;