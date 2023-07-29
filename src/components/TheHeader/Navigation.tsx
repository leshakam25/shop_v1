import React from 'react';
import NavButton from "@/components/Buttons/NavButton";

const Navigation = () => {
    const links = [
        {label: "Домой", href: '/'},
        {label: "Продукты", href: '/products'},
    ]
    return (
        <>
            {links.map((link) => {
                return (
                   <NavButton key={link.label} link={link}/>
                );
            })}
        </>
    );
};

export default Navigation;