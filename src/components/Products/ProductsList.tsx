"use client"
import React, {useState} from 'react';
import {Box} from "@mui/material";
import ProductItem from "@/components/Products/ProductItem";

async function getProducts() {
    const response = await fetch("http://localhost:3000/api/products")
    return response.json()
}


const data = async () => await getProducts()

const ProductsList = () => {
    const [products, setProducts] = useState(data())
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "center",
            }}
        >
            <button onClick={() => console.log(products)}>log</button>
            {/*{products && products.map((el: any) => (*/}
            {/*    <h2 key={el._id}>{el.label}{el.description}</h2>*/}
            {/*    <ProductItem key={el._id} el={el}/>*/}
            {/*))}*/}
        </Box>
    )
}

export default ProductsList;