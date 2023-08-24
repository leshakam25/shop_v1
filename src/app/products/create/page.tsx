import React from 'react';
import {Metadata} from "next";
import ProductCreateForm from "@/product/components/ProductCreateForm";

export const metadata: Metadata = {
    title: 'Create product | Shop v1.0',
    description: 'Products',
}

const CreateProduct = () => {
    return <ProductCreateForm/>
};

export default CreateProduct;