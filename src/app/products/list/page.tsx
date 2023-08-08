import React from 'react';
import {Metadata} from "next";
import ProductsList from "@/components/Products/ProductsList";

export const metadata: Metadata = {
    title: 'List products | Shop v1.0',
    description: 'Products',
}

const Page = async () => {
        return <ProductsList />
    }
;

export default Page;