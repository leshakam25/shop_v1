import React from "react";
import {Metadata} from "next";
import {Container} from "@mui/material";

export const metadata: Metadata = {
    title: 'Products | Shop v1.0',
    description: 'Products',
}

export default function ProductsLayout({children}: { children: React.ReactNode }) {
    return (
        <Container maxWidth={false} sx={{
            my: 2
        }}>
            {children}
        </Container>
    );
}