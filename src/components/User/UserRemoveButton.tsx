"use client"
import React from 'react';
import {IconButton, Tooltip} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";
import {useRouter} from "next/navigation";

const UserRemoveButton = ({id}: any) => {
    const router: AppRouterInstance = useRouter()
    const removeUser = async () => {
        const confirmed = confirm('Are you sure?')

        if (confirmed) {
            const res: Response = await fetch(`/api/user?id=${id}`, {
                method: "DELETE"
            })
            if (res.ok) {
                router.refresh();
            }
        }
    }
    return (
        <Tooltip title={'Удалить'}>
            <IconButton onClick={removeUser} color={'error'}>
                <HighlightOffIcon/>
            </IconButton>
        </Tooltip>
    );
};

export default UserRemoveButton;