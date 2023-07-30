import React from 'react';
import Navigation from "@/components/TheHeader/Navigation";
import { Container} from "@mui/material";

const TheHeader = () => {
    return (
        <header>
            <Container
                maxWidth={false}
                sx={{
                height: 60,
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "center",
                background:'lightgray'
            }}>
                <Navigation/>
            </Container>
        </header>
    );
};

export default TheHeader;