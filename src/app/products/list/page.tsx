import React from 'react';
import {Metadata} from "next";
import ProductsList from "@/components/Products/ProductsList";

export const metadata: Metadata = {
    title: 'List products | Shop v1.0',
    description: 'Products',
}

const getProducts = async (): Promise<any> => {
    const url = `${process.env.BASE_URL}/api/products/`
    try {
        const res = await fetch(url,
            {
                // next: {revalidate: 60},
                cache: "no-store"
            });
        if (!res.ok) {
            throw new Error("Failed to fetch")
        }
        return res.json()
    } catch (error) {
        console.log("Error loading products: ", error)
    }
}

const Page = async () => {
        const products = await getProducts()
        return <main>{products && <ProductsList data={products.products}/>}</main>
    }
;

export default Page;