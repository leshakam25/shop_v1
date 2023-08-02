import React, { ReactElement} from 'react';
import {Metadata} from "next";
import ProductEditForm from "@/components/Products/ProductEditForm";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";

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

const EditProduct = async ({params}: Params): Promise<ReactElement> => {
    const {_id} = params;
    const {product} = await getProductById(_id);
    const {label, description} = product;
    return (
        <div>
            <h2>Редактирование продукта</h2>
            <ProductEditForm id={_id} label={label} description={description}/>
        </div>
    );
};

export default EditProduct;