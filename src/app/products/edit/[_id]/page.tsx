import React from 'react';
import {Metadata, NextPage} from "next";
import ProductEditForm from "@/components/Products/ProductEditForm";
import {Product} from "@/interfaces/product.interface";

interface Params {
    params: {
        _id: string;
    };
}

export const metadata: Metadata = {
    title: 'Edit product | Shop v1.0',
    description: 'Products',
}


const getProductById = async (_id: string): Promise<Product | undefined>=> {
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

const EditProduct: NextPage<Params> = async ({params}) => {
    const {_id} = params;
    const {product}: any = await getProductById(_id);
    return <>{product && <ProductEditForm product={product}/>}</>
};

export default EditProduct;