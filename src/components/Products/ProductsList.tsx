import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import ProductListItem from "@/components/Products/ProductListItem";
import ProductCreateButton from "@/components/Products/ProductCreateButton";


const getProducts = async (): Promise<any> => {
    const url = `${process.env.BASE_URL}/api/products/`
    try {
        const res = await fetch(url,
            {
                // next: {revalidate: 60},
                cache: "no-store"
            });
        if (!res.ok) {
            throw new Error("Failed to fetch")
        }
        return res.json()
    } catch (error) {
        console.log("Error loading products: ", error)
    }
}


const ProductsList = async () => {
    const products = await getProducts()
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
                {products && products.products.map((el: any) => (
                    <ProductListItem key={el._id} el={el}/>
                ))}
            </Box>
        </Box>

    )
}

export default ProductsList;