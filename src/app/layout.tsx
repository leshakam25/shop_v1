import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import "normalize.css"
import TheHeader from "@/components/TheHeader/TheHeader";
// import TheFooter from "@/components/TheFooter/TheFooter";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Shop v1.0',
    description: 'Created by Nextjs',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <TheHeader/>
        <main>
            {children}
        </main>
        {/*<TheFooter/>*/}
        </body>
        </html>
    )
}
