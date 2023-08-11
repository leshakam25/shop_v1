import React from 'react';
import {Metadata} from "next";
import ProductsList from "@/components/Products/ProductsList";

export const metadata: Metadata = {
    title: 'List products | Shop v1.0',
    description: 'Products',
}

const getProducts = async (): Promise<any> => {
    const url = `${process.env.REQUEST_URL}/product/`
    try {
        const res = await fetch(url,
            {
                // next: {revalidate: 60},
                cache: "no-store"
            });
        return res.json()
    } catch (error) {
        console.log("Error loading products: ", error)
    }
}
const Page = async () => {
        const products: any = await getProducts()
        return (
            <>{products && <ProductsList data={products}/>}</>
        )
    }
;

export default Page;