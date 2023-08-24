import React from 'react';
import {Metadata, NextPage} from "next";
import ProductEditForm from "@/product/components/ProductEditForm";
import {getProductById} from "@/product/services/product.service";
import {Params} from "@/shared/interfaces/params.interface";

export const metadata: Metadata = {
    title: 'Edit product | Shop v1.0',
    description: 'Products',
}

const EditProduct: NextPage<Params> = async ({params}) => {
    const {_id} = params;
    const product = await getProductById(_id);
    return <>{product && <ProductEditForm product={product}/>}</>
};

export default EditProduct;