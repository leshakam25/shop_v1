"use client"
import React from 'react';
import {Box, Button, Tooltip} from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import GroupsIcon from '@mui/icons-material/Groups';
import {usePathname} from "next/navigation";
import Link from "next/link";

const Navigation = () => {
    const pathname = usePathname();
    const links: { label: string, href: string }[] = [
        {label: "Домой", href: '/'},
        {label: "Список товаров", href: '/products/list'},
        {label: "Создать товар", href: '/products/create'},
        {label: "Чат", href: '/chat'},
        {label: "Список пользователей", href: '/user/list'},
    ]


    return (
        <Box>
            {links && links.map((link: { label: string, href: string }) => {
                const isActive = pathname === link.href;
                return (
                    <Tooltip key={link.label} title={link.label}>
                        <Link href={link.href}>
                            <Button variant={'contained'} color={isActive ? "success" : "primary"} sx={{m: 0.5}}>
                                {link.label === "Домой" && <HouseIcon sx={{color: "white"}}/>}
                                {link.label === "Список товаров" && <FormatListBulletedIcon sx={{color: "white"}}/>}
                                {link.label === "Создать товар" && <AddCircleOutlineIcon sx={{color: "white"}}/>}
                                {link.label === "Чат" && <QuestionAnswerIcon sx={{color: "white"}}/>}
                                {link.label === "Список пользователей" && <GroupsIcon sx={{color: "white"}}/>}
                            </Button>
                        </Link>
                    </Tooltip>
                );
            })}
        </Box>
    );
};

export default Navigation;