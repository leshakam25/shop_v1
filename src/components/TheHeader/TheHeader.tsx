import React from 'react';
import Navigation from "@/components/TheHeader/Navigation";
import { Container} from "@mui/material";
import AuthBlock from "@/components/TheHeader/AuthBlock";
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
                <AuthBlock
                    profile={profile}
                />
            </Container>
        </header>
    );
};

export default TheHeader;