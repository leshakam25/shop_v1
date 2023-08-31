'use client'
import React from 'react';
import {Box} from "@mui/material";

const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh'
        }}>
            {children}
        </Box>
    );
};

export default Layout;