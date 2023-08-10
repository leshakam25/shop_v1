import React, {ReactElement} from 'react';
import {Metadata} from "next";
import ProductShow from "@/components/Products/ProductShow";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

export const metadata: Metadata = {
    title: 'Show product | Shop v1.0',
    description: 'Products',
}

const getProductById = async (_id: string) => {
    const url = `${process.env.BASE_URL}/product/${_id}`
    try {
        const res = await fetch(url, {
            cache: 'no-store'
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

const ShowProduct = async ({params}: Params) => {
    const {_id} = params;
    const product: any = await getProductById(_id);
    return <>{product && <ProductShow product={product}/>}</>
};

export default ShowProduct;