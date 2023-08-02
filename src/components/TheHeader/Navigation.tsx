import React from 'react';
import ProductNavButton from "@/components/Products/ProductNavButton";
import {ButtonGroup} from "@mui/material";

const Navigation = () => {
    const links: { label: string, href: string }[] = [
        {label: "Домой", href: '/'},
        {label: "Список товаров", href: '/products/list'},
        {label: "Создать товар", href: '/products/create'},
        {label: "Чат", href: '/chat'},
    ]
    return (
        <ButtonGroup
            variant={'contained'}
            sx={{
                height: "80%",
            }}>
            {links && links.map((link) => {
                return (
                    <ProductNavButton key={link.label} link={link}/>
                );
            })}
        </ButtonGroup>
    );
};

export default Navigation;