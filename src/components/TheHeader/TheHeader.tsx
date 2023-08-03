import React from 'react';
import Navigation from "@/components/TheHeader/Navigation";
import { Container} from "@mui/material";
import HeaderAuthBlock from "@/components/Auth/HeaderAuthBlock";
import {ProfileInterface} from "@/interfaces/profile.interface";

const profile: ProfileInterface = {
    userId: "1",
    name: "Ivan",
    password: "123",
    email: "ivan@ivan.com",
}

const TheHeader = () => {
    return (
        <header>
            <Container
                maxWidth={false}
                sx={{
                height: 60,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                background:'lightgray'
            }}>
                <Navigation/>
                <HeaderAuthBlock />
            </Container>
        </header>
    );
};

export default TheHeader;