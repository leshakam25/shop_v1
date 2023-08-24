import React from 'react';
import {Metadata} from "next";
import ProductsList from "@/product/components/ProductsList";
import {getProducts} from "@/product/services/product.service";

export const metadata: Metadata = {
    title: 'List products | Shop v1.0',
    description: 'Products',
}

const Page = async () => {
        const products: any = await getProducts()
        return (
            <>{products && <ProductsList data={products}/>}</>
        )
    }
;

export default Page;