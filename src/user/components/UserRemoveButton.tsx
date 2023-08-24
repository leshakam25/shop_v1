"use client"
import React from 'react';
import {IconButton, Tooltip} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {removeUser} from "@/user/services/user.service";

const UserRemoveButton = ({id}: any) => {
    const handleClick = () => {removeUser(id)}
    return (
        <Tooltip title={'Удалить'}>
            <IconButton onClick={handleClick} color={'error'}>
                <HighlightOffIcon/>
            </IconButton>
        </Tooltip>
    );
};

export default UserRemoveButton;