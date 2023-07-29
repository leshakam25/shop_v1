import React from 'react';
import {Box} from "@mui/material";

const TheFooter = () => {
    return (
        <footer>
            <Box sx={{
                height: 40,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
            }}>
                TheFooter
            </Box>
        </footer>
    );
};

export default TheFooter;