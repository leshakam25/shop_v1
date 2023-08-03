import React from "react";
import {Metadata} from "next";
import {Container} from "@mui/material";

export const metadata: Metadata = {
    title: 'Chat | Shop v1.0',
    description: 'Chat',
}

export default function ChatLayout({children}: { children: React.ReactNode }) {
    return (
            <Container maxWidth={"md"} sx={{
                my:2,
            }}>
                {children}
            </Container>
    );
}