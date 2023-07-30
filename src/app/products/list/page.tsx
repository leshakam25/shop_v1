import React from 'react';
import {Metadata} from "next";
import ProductsList from "@/components/Products/ProductsList";

export const metadata: Metadata = {
    title: 'List products | Shop v1.0',
    description: 'Products',
}

const Page = () => {
        return (
            <div>
                <h2>Список продуктов</h2>
                <ProductsList/>
            </div>
        );
    }
;

export default Page;