import React from 'react';
import Navigation from "@/components/TheHeader/Navigation";
import {Box} from "@mui/material";

const TheHeader = () => {
    return (
        <header>
            <Box sx={{
                height: 40,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Navigation/>
            </Box>
        </header>
    );
};

export default TheHeader;