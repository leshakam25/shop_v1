"use client"
import React from 'react';
import {Box, CardMedia, Typography} from "@mui/material";

const ProductShow = ({product}: any) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            background: 'lightgray',
            borderRadius: "8px",
            my:4,
            p: 2
        }}>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
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
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
            }}>
            {product.images && product.images.map((el: any, i: any) => (
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
            </Box>
        </Box>
    );
};

export default ProductShow;