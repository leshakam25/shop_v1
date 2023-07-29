import type {Metadata} from 'next'
import {Container} from "@mui/material";
import {Inter} from 'next/font/google'
import "normalize.css"
import TheHeader from "@/components/TheHeader/TheHeader";
import TheFooter from "@/components/TheFooter/TheFooter";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Shop v1.0',
    description: 'Created by nextjs',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Container maxWidth={false}>
            <TheHeader/>
            {children}
            <TheFooter/>
        </Container>
        </body>
        </html>
    )
}
