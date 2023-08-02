"use client"
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import HouseIcon from '@mui/icons-material/House';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import {Button,  Tooltip} from "@mui/material";

const NavButton = ({link}: any) => {
    const pathname = usePathname();
    const isActive = pathname === link.href;

    return (
        <Link
            href={link.href}
        >
            <Tooltip title={link.label}>
            <Button
                variant={'contained'}
                sx={{
                    borderRadius: 0,
                    height:'100%'
                }}
                color={isActive ? "success" : "primary"}
            >
                {link.label == "Домой" && <HouseIcon/>}
                {link.label == "Список товаров" && <FormatListBulletedIcon/>}
                {link.label == "Создать товар" && <AddCircleOutlineIcon/>}
                {link.label == "Чат" && <QuestionAnswerIcon/>}
            </Button>
            </Tooltip>
        </Link>
    );
};

export default NavButton;