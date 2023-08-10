import React, {ReactElement} from 'react';
import {Metadata} from "next";
import ProductEditForm from "@/components/Products/ProductEditForm";

export const metadata: Metadata = {
    title: 'Edit product | Shop v1.0',
    description: 'Products',
}

// const getProductById = async (_id: string) => {
//     const url = `${process.env.BASE_URL}/api/products/${_id}`
//     try {
//         const res = await fetch(url, {
//             cache: 'no-store'
//         })
//
//         if (!res.ok) {
//             throw new Error("Failed to fetch topic")
//         }
//         return res.json()
//     } catch (error) {
//         console.log(error)
//     }
// }

const EditProduct = async ({params}: any) => {
    // const {_id} = params;
    // const {product} = await getProductById(_id);
    return
    // <>{product && <ProductEditForm product={product}/>}</>
};

export default EditProduct;