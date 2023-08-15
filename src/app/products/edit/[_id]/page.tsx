import React from 'react';
import {Metadata} from "next";
import ProductEditForm from "@/components/Products/ProductEditForm";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

export const metadata: Metadata = {
    title: 'Edit product | Shop v1.0',
    description: 'Products',
}

const getProductById = async (_id: string)=> {
    const url = `${process.env.REQUEST_URL}/product/${_id}`
    try {
        const res = await fetch(url, {
            cache: 'no-store'
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const EditProduct = async ({params}: Params) => {
    const {_id} = params;
    const {product} = await getProductById(_id);
    return <>{product && <ProductEditForm product={product}/>}</>
};

export default EditProduct;