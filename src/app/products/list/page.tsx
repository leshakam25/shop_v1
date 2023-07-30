import React from 'react';
import {Metadata} from "next";
import {Box  } from "@mui/material";
import ProductItem from "@/components/Products/ProductItem";

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
            <h2>List of products</h2>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                    alignItems: "center",

                }}
            >
                {products && products.map((el: any) => (
                    <ProductItem key={el._id} el={el}/>
                ))}
            </Box>
        </div>
    );
};

export default Page;