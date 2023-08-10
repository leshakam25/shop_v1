"use client"
import React from 'react';
import {Box, CardMedia, Typography} from "@mui/material";

const ProductShow = ({product}: any) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: {xs: 'column', sm: 'row'},
            background: 'lightgray',
            borderRadius: "8px",
            maxWidth: 600,
            m: '0 auto',
            p: 2
        }}>
            {product.images && product.images((el: any, i: any) => (
                <CardMedia
                    key={i}
                    component="img"
                    image={el}
                    alt="no image"
                    sx={{
                        boxShadow: 2,
                        borderRadius: '8px',
                        width: {xs: "100%", sm: "300px"},
                        height: {xs: '200px', sm: "300px"}
                    }}
                />
            ))}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                ml: {xs: 0, sm: 2}
            }}>
                <Typography variant={'h5'}>
                    Название: {product.title}
                </Typography>
                <Typography variant={'body1'}>
                    Цена:{product.price}
                </Typography>
                <Typography variant={'body1'}>
                    Описание: {product.desc}
                </Typography>
            </Box>
        </Box>
    );
};

export default ProductShow;