import React from "react";
import ProductNavBar from "@/components/Products/ProductNavBar";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Products | Shop v1.0',
    description: 'Products',
}

export default function ProductsLayout({children}: { children: React.ReactNode }) {
    return (
        <div>
            <ProductNavBar/>
            {children}
        </div>
    );
}