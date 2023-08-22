import React from 'react';
import {Metadata, NextPage} from "next";
import ProductShow from "@/components/Products/ProductShow";
import {getProductById} from "@/services/product.service";
import {Params} from "@/interfaces/shared.interface";

export const metadata: Metadata = {
    title: 'Show product | Shop v1.0',
    description: 'Products',
}


const ShowProduct: NextPage<Params> = async ({params}) => {
    const {_id} = params;
    const product: any = await getProductById(_id);
    console.log(product)
    return <>{product && <ProductShow product={product}/>}</>
};

export default ShowProduct;