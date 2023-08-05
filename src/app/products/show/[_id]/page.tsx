import React, { ReactElement} from 'react';
import {Metadata} from "next";
import ProductEditForm from "@/components/Products/ProductEditForm";
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import ProductShow from "@/components/Products/ProductShow";
import ProductCreateForm from "@/components/Products/ProductCreateForm";
import {ProductInterface} from "@/interfaces/product.interface";

export const metadata: Metadata = {
    title: 'Show product | Shop v1.0',
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

const ShowProduct = async ({params}: any): Promise<ReactElement> => {
    const {_id} = params;
    const {product}: any = await getProductById(_id);
    return (
        <div>
            <h2>Просмотр товара</h2>
            <ProductShow product={product}/>
        </div>
    );
};

export default ShowProduct;