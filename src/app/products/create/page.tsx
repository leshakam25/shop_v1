import React from 'react';
import {Metadata} from "next";
import ProductCreateForm from "@/components/Products/ProductCreateForm";

export const metadata: Metadata = {
    title: 'Create product | Shop v1.0',
    description: 'Products',
}

const CreateProduct = () => {
    return (
        <div>
            <h2>Создать товар</h2>
            <ProductCreateForm/>
        </div>
    );
};

export default CreateProduct;