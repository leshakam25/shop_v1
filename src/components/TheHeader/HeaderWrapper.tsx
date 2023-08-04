"use client"
import React from 'react';
import {Container} from "@mui/material";
import Navigation from "@/components/TheHeader/Navigation";
import AuthBlock from "@/components/TheHeader/AuthBlock";

const HeaderWrapper = () => {
    return (
        <Container
            maxWidth={false}
            sx={{
                height:{xs:100, sm:60},
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                background: 'lightgray'
            }}>
            <Navigation/>
            <AuthBlock/>
        </Container>
    );
};

export default HeaderWrapper;