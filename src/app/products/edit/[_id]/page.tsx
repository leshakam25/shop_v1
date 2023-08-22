import React from 'react';
import {Metadata, NextPage} from "next";
import ProductEditForm from "@/components/Products/ProductEditForm";
import {getProductById} from "@/services/product.service";
import {Params} from "@/interfaces/shared.interface";

export const metadata: Metadata = {
    title: 'Edit product | Shop v1.0',
    description: 'Products',
}

const EditProduct: NextPage<Params> = async ({params}) => {
    const {_id} = params;
    const product: any = await getProductById(_id);
    console.log(_id)
    return <>{product && <ProductEditForm product={product}/>}</>
};

export default EditProduct;