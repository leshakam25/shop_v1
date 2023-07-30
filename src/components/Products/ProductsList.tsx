"use client"
import React from 'react';
import {Box} from "@mui/material";
import ProductItem from "@/components/Products/ProductItem";

const ProductsList = ({products}: any) => {
    return (
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
    )
}


export default ProductsList;