import {Container} from "@mui/material";
import Navigation from "@/shared/components/TheHeader/Navigation";
import AuthBlock from "@/shared/components/TheHeader/AuthBlock";
import React from "react";
import {SignInButton} from "@/auth/components/SignInButton";

const TheHeader = () => {
    return (
        <header>
            <Container
                maxWidth={false}
                sx={{
                    height: 'auto',
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: 'lightblue',
                    py: 0.4
                }}>
                <Navigation/>
                {/*<AuthBlock/>*/}
                <SignInButton/>
            </Container>
        </header>
    );
};

export default TheHeader;