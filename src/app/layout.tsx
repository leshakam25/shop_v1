import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import "normalize.css"
import React from "react";
import {Container} from "@mui/material";
import TheHeader from "@/shared/components/TheHeader/TheHeader";
// import TheFooter from "@/shared/components/TheFooter/TheFooter";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Shop v1.0',
    description: 'Created by Next JS',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <TheHeader/>
        <Container maxWidth={"xl"}>
            <main>
                {children}
            </main>
        </Container>
        {/*<TheFooter/>*/}
        </body>
        </html>
    )
}
