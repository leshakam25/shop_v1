"use client"
import React, {useState} from 'react';
import {Box} from "@mui/material";
import ProductItem from "@/components/Products/ProductItem";

const ProductsList = ({data}: any) => {
    const [products] = useState(data)
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
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