import React from "react";
import {Metadata} from "next";
import {Container} from "@mui/material";

export const metadata: Metadata = {
    title: 'Auth | Shop v1.0',
    description: 'Authorization',
}

export default function ChatLayout({children}: { children: React.ReactNode }) {
    return (
            <Container maxWidth={false} sx={{
                my:2,
                display:'flex',
                flexDirection:'column',
                justifyContent: 'center',
                alignItems:'center'
            }}>
                {children}
            </Container>
    );
}