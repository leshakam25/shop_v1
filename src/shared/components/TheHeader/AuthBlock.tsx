"use client"
import React from 'react';
import { Button, Tooltip } from "@mui/material";
import Link from "next/link";
import LoginIcon from '@mui/icons-material/Login';
// import {usePathname} from "next/navigation";

const AuthBlock = () => {
    // const pathname = usePathname();
    // const isActive = pathname === `/auth/login/` || `/auth/register/`;
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