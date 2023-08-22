import React from 'react';
import {Metadata, NextPage} from "next";
import ProductShow from "@/components/Products/ProductShow";
import {User} from "@/interfaces/user.interface";

interface Params {
    params: {
        _id: string;
    };
}

export const metadata: Metadata = {
    title: 'Show product | Shop v1.0',
    description: 'Products',
}

const getProductById = async (_id: string): Promise<User | undefined>  => {
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

const ShowProduct: NextPage<Params> = async ({params}) => {
    const {_id} = params;
    const product: any = await getProductById(_id);
    return <>{product && <ProductShow product={product}/>}</>
};

export default ShowProduct;