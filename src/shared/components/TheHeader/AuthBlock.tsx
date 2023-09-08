"use client"
import React from 'react';
import { Button, Tooltip } from "@mui/material";
import Link from "next/link";
import LoginIcon from '@mui/icons-material/Login';

const AuthBlock = () => {
        return (
            <>
                <Link href={`/auth/login/`}>
                    <Tooltip title={"Авторизация"}>
                        <Button variant={'contained'} color={"primary"} sx={{m: 0.5}}>
                        <LoginIcon/>
                        </Button>
                    </Tooltip>
                </Link>
            </>

        )
            ;
    }
;

export default AuthBlock;