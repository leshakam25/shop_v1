import React from 'react';
import {Metadata} from "next";
import {Box  } from "@mui/material";
import ProductItem from "@/components/Products/ProductItem";
import ProductsList from "@/components/Products/ProductsList";

async function getProducts() {
    const response = await fetch("http://localhost:3000/api/products")
    return response.json()
}

export const metadata: Metadata = {
    title: 'List products | Shop v1.0',
    description: 'Products',
}

const Page = async () => {
    const products = await getProducts()
    return (
        <div>
            <h2>Список продуктов</h2>
            <ProductsList products={products}/>
        </div>
    );
};

export default Page;