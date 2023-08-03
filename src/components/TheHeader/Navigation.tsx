"use client"
import React from 'react';
import {Box, Button, Tooltip} from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import {usePathname} from "next/navigation";
import Link from "next/link";

const Navigation = () => {
    const pathname = usePathname();
    const links: { label: string, href: string }[] = [
        {label: "Домой", href: '/'},
        {label: "Список товаров", href: '/products/list'},
        {label: "Создать товар", href: '/products/create'},
        {label: "Чат", href: '/chat'},
    ]

    const profile = {
        userId: '1',
        name: "Ivan",
        email: "ivan@ivan.ivan"
    }

    return (
        <Box>
            {links && links.map((link: { label: string, href: string }) => {
                const isActive = pathname === link.href;
                return (
                    <Tooltip title={link.label}>
                        <Link href={link.href}>
                            <Button variant={'contained'} color={isActive ? "success" : "primary"} sx={{mx:0.5}} size={'large'}>
                                {link.label == "Домой" && <HouseIcon sx={{color: "white"}}/>}
                                {link.label == "Список товаров" && <FormatListBulletedIcon sx={{color: "white"}}/>}
                                {link.label == "Создать товар" && <AddCircleOutlineIcon sx={{color: "white"}}/>}
                                {link.label == "Чат" && <QuestionAnswerIcon sx={{color: "white"}}/>}
                            </Button>
                        </Link>
                    </Tooltip>
                );
            })}
        </Box>
    );
};

export default Navigation;