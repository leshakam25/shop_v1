"use client"
import React from 'react';
import {Box, CardMedia,  Typography} from "@mui/material";

const ProductShow = ({product}: any) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: {xs: 'column', sm: 'row'},
        }}>
            <CardMedia
                component="img"
                image={product.image}
                alt="no image"
                sx={{
                    boxShadow: 2,
                    borderRadius: '8px',
                    width: {xs: "100%", sm: "300px"},
                    height: {xs: '200px', sm: "300px"}
                }}
            />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                ml: {xs: 0, sm: 2}
            }}>
                <Typography variant={'h5'}>
                    Название: {product.label}
                </Typography>
                <Typography variant={'body1'}>
                    Краткое описание: {product.shortDesc}
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Typography variant={'body1'}>
                        Тэги:
                    </Typography>
                    {/*{product && product.tags && product.tags.map((el: string, i: any) => (*/}
                    {/*    <Chip sx={{mx: 0.4}} key={i} label={el}/>*/}
                    {/*))}*/}
                </Box>
                <Typography variant={'body1'}>
                    Цена:{product.currentPrice}
                </Typography>
                <Typography variant={'body1'}>
                    Старая цена: {product.oldPrice}
                </Typography>
                <Typography variant={'body1'}>
                    Описание: {product.description}
                </Typography>
            </Box>
        </Box>
    );
};

export default ProductShow;