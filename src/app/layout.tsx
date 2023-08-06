import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import "normalize.css"
import TheHeader from "@/components/TheHeader/TheHeader";
import React from "react";
import {AuthProvider} from "@/app/Providers";
import {Container} from "@mui/material";
// import TheFooter from "@/components/TheFooter/TheFooter";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Shop v1.0',
    description: 'Created by Next JS',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <AuthProvider>
            <TheHeader/>
            <Container maxWidth={"xl"}>
                <main>
                    {children}
                </main>
            </Container>
            {/*<TheFooter/>*/}
        </AuthProvider>
        </body>
        </html>
    )
}
