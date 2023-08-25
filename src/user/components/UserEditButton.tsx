import React from 'react';
import {IconButton, Tooltip} from "@mui/material";
import Link from "next/link";
import EditIcon from '@mui/icons-material/Edit';

interface UserEditButtonProps {
    _id: string;
}

const UserEditButton: React.FC<UserEditButtonProps> = ({_id}) => {
    return (
        <Link href={`/user/edit/${_id}`}>
            <Tooltip title={'Редактировать'}>
                <IconButton color={'primary'}>
                    <EditIcon/>
                </IconButton>
            </Tooltip>
        </Link>
    );
};

export default UserEditButton;