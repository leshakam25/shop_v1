import React from 'react';
import {Metadata} from "next";
import ProductCreateForm from "@/components/Products/ProductCreateForm";
import ProductEditForm from "@/components/Products/ProductEditForm";

export const metadata: Metadata = {
    title: 'Create product | Shop v1.0',
    description: 'Products',
}

const CreateProduct = () => {
    return (
        <div>
            <h2>Редактирование продукта</h2>
            <ProductEditForm/>
        </div>
    );
};

export default CreateProduct;