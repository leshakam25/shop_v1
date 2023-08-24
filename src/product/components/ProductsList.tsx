"use client"
import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import ProductListItem from "@/product/components/ProductListItem";
import ProductCreateButton from "@/product/components/ProductCreateButton";
import {NextPage} from "next";
import {Product} from "@/product/interfaces/product.interface";

const ProductsList: NextPage<any | undefined> = ({data}) => {
    const [products] = useState(data)
    return (
        <Box sx={{my: 2}}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2
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
                    justifyContent: "left",
                    alignItems: "center",
                    overflow: 'auto',
                    position: 'relative'
                }}
            >
                {products && products.map((el: Product) => (<ProductListItem key={el._id} el={el}/>))}
            </Box>
        </Box>

    )
}

export default ProductsList;