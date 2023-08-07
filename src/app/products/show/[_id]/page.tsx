import React, {ReactElement} from 'react';
import {Metadata} from "next";
import ProductShow from "@/components/Products/ProductShow";

export const metadata: Metadata = {
    title: 'Show product | Shop v1.0',
    description: 'Products',
}

const getProductById = async (_id: string) => {
    try {
        const res = await fetch(`/api/products/${_id}`, {
            cache: 'no-store'
        })

        if (!res.ok) {
            throw new Error("Failed to fetch topic")
        }
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const ShowProduct = async ({params}: any): Promise<ReactElement> => {
    const {_id} = params;
    const {product}: any = await getProductById(_id);
    return <main><ProductShow product={product}/></main>
};

export default ShowProduct;