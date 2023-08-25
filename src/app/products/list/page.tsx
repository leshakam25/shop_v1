import React from 'react';
import {Metadata} from "next";
import ProductsList from "@/product/components/ProductsList";

export const metadata: Metadata = {
    title: 'List products | Shop v1.0',
    description: 'Products',
}

const ProductListPage =  () => {
    return <ProductsList/>
}


export default ProductListPage;