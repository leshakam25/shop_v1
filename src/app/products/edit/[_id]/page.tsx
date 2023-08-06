import React, {ReactElement} from 'react';
import {Metadata} from "next";
import ProductEditForm from "@/components/Products/ProductEditForm";

export const metadata: Metadata = {
    title: 'Edit product | Shop v1.0',
    description: 'Products',
}

const getProductById = async (_id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/api/products/${_id}`, {
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

const EditProduct = async ({params}: any): Promise<ReactElement> => {
    const {_id} = params;
    const {product} = await getProductById(_id);
    return <main><ProductEditForm product={product}/></main>
};

export default EditProduct;