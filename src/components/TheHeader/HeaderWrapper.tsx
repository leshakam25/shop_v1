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
                height:'auto',
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                background: 'lightblue',
                py:0.4
            }}>
            <Navigation/>
            <AuthBlock/>
        </Container>
    );
};

export default HeaderWrapper;