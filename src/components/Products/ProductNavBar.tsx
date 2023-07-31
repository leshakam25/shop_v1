"use client"
import React from 'react';
import {Container} from "@mui/material";
import NavButton from "@/components/Buttons/NavButton";

const ProductNavBar = () => {
    const links: { label: string, href: string }[] = [
        {label: "Список", href: '/products/list'},
        {label: "Создать", href: '/products/create'},
    ]

    return (
        <Container
            maxWidth={false}
            sx={{
                height: 60,
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "center",
                background: 'lightblue'
            }}>
            {links.map((link) => {
                return (
                    <NavButton key={link.label} link={link}/>
                );
            })}
        </Container>
    );
};

export default ProductNavBar;