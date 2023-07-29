import React from 'react';
import {Box } from "@mui/material";
import NavButton from "@/components/Buttons/NavButton";

const ProductNavBar = () => {
    const links = [
        {label: "Список", href: '/products/list'},
        {label: "Создать", href: '/products/create'},
        {label: "Редактировать", href: '/products/edit'},
    ]

    return (
        <Box sx={{
            height: 40,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        }}>
            {links.map((link) => {
                return (
                   <NavButton key={link.label} link={link}/>
                );
            })}
        </Box>
    );
};

export default ProductNavBar;