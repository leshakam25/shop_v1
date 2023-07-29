import React from "react";
import ProductNavBar from "@/components/Products/ProductNavBar";

export default function ProductsLayout({children}: { children: React.ReactNode }) {
    return (
        <div>
            <ProductNavBar/>
            {children}
        </div>
    );
}