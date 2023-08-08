import React from 'react';
import {Metadata} from "next";
import ProductCreateForm from "@/components/Products/ProductCreateForm";

export const metadata: Metadata = {
    title: 'Create product | Shop v1.0',
    description: 'Products',
}

const CreateProduct = () => {
    return <ProductCreateForm/>
};

export default CreateProduct;