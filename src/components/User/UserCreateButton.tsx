import React from 'react';
import Link from "next/link";
import {Button, Tooltip} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const UserCreateButton = () => {
    return (
        <Link href={`/user/create`}>
            <Tooltip title={"Добавить пользователя"}>
                <Button color={'success'} variant={'contained'} size={'large'}>
                    <AddCircleOutlineIcon/>
                </Button>
            </Tooltip>
        </Link>
    );
};

export default UserCreateButton;