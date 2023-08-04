import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import "normalize.css"
import TheHeader from "@/components/TheHeader/TheHeader";
import React from "react";
import {AuthProvider} from "@/app/Providers";
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
            <main>
                {children}
            </main>
            {/*<TheFooter/>*/}
        </AuthProvider>
        </body>
        </html>
    )
}
