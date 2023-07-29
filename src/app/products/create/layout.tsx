import React from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Create product | Shop v1.0',
    description: 'Products',
}

export default function ProductsLayout({children}: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}