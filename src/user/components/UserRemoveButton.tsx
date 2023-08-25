"use client"
import React from 'react';
import {IconButton, Tooltip} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {useUsers} from "@/user/store";
import {shallow} from "zustand/shallow";
import {useRouter} from "next/navigation";

interface UserRemoveButtonProps {
    _id: string;
}

const UserRemoveButton: React.FC<UserRemoveButtonProps> = ({_id}) => {
    const removeUser = useUsers((state) =>state.removeUser, shallow)
    const router = useRouter()
    const handleClick = () => {
        removeUser(_id)
        router.refresh()
        router.push('/user/list')
    }
    return (
        <Tooltip title={'Удалить'}>
            <IconButton onClick={handleClick} color={'error'}>
                <HighlightOffIcon/>
            </IconButton>
        </Tooltip>
    );
};

export default UserRemoveButton;