"use client"
import React from 'react';
import Link from "next/link";
import {Button} from "@mui/material";
import {usePathname} from "next/navigation";

const NavButton = ({link}: any) => {
    const pathname = usePathname();
    const isActive = pathname === link.href;
    return (
        <Link
            href={link.href}
        >
            <Button
                variant={'contained'}
                color={isActive ? "success" : "primary"}
            >
                {link.label}
            </Button>
        </Link>
    );
};

export default NavButton;