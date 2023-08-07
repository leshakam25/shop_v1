"use client"
import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import ProductListItem from "@/components/Products/ProductListItem";
import ProductCreateButton from "@/components/Products/ProductCreateButton";

const ProductsList = ({data}: any) => {
    const [products] = useState(data)
    return (
        <Box sx={{my:2}}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                alignItems: "center",
                mb:2
            }}>
                <Typography variant={'h4'}>
                    Товары
                </Typography>
                <ProductCreateButton/>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                    overflow: 'auto',
                    position: 'relative'
                }}
            >
                {products && products.map((el: any) => (
                    <ProductListItem key={el._id} el={el}/>
                ))}
            </Box>
        </Box>

    )
}

export default ProductsList;