"use client"
import React from 'react';
import { Box, CardMedia, Typography } from "@mui/material";
import {Product} from "@/interfaces/product.interface";

interface ProductShowProps {
    product: Product;
}

const ProductShow: React.FC<ProductShowProps> = ({ product }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                background: 'lightgray',
                borderRadius: "8px",
                my: 4,
                p: 2,
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Typography variant={'h5'}>
                    Название: {product.title}
                </Typography>
                <Typography variant={'body1'}>
                    Цена: {product.price}
                </Typography>
                <Typography variant={'body1'}>
                    Описание: {product.desc}
                </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                {product.images && product.images.map((el: string, i: number) => (
                    <CardMedia
                        key={i}
                        component="img"
                        image={el}
                        alt="no image"
                        sx={{
                            boxShadow: 2,
                            borderRadius: '8px',
                            width: { xs: "100%", sm: "300px" },
                            height: { xs: '200px', sm: "300px" },
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default ProductShow;
