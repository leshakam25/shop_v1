"use client"
import React from 'react';
import {Box, CardMedia, Chip, Container, Typography} from "@mui/material";
// import {ProductInterface, ProductTag} from "@/interfaces/product.interface";

const ProductShow = ({product}: any) => {
    return (
        <Container maxWidth={'sm'} sx={{
            display: 'flex',
            flexDirection: 'column',
            boxShadow: 2,
            py: 2
        }}>

            <Box sx={{
                display: 'flex',
                flexDirection: {xs: 'column', sm: 'row'},
                justifyContent: "space-between",

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
                    gap:2
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
                </Box>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap:2,
                mt:3
            }}>
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
        </Container>
    );
};

export default ProductShow;