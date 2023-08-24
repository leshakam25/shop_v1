"use client"
import React from 'react';
import {Card, CardActions, CardContent, CardHeader, CardMedia,  Typography} from "@mui/material";
import ProductRemoveButton from "@/product/components/ProductRemoveButton";
import ProductEditButton from "@/product/components/ProductEditButton";
import ProductShowButton from "@/product/components/ProductShowButton";
import {Product} from "@/product/interfaces/product.interface";

interface ProductListItemProps {
    el: Product
}

const ProductListItem: React.FC<ProductListItemProps> = ({ el }) => {
    return (
        <Card
            key={el._id}
            sx={{
                boxShadow: '0',
                background: 'lightgray',
                width: {
                    xs: "100%",
                    md: "45%",
                    lg: "30%",
                },
                m: { xs: 1, sm: 3 },
            }}
        >
            <CardHeader
                title={el.title}
                subheader={el.price}
            />
            <CardMedia
                component="img"
                height="120"
                image={el.images[0]}
                alt="no image"
            />
            <CardContent>
                <Typography variant={"body1"}>
                    {el.desc}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ProductShowButton id={el._id} />
                <ProductEditButton id={el._id} />
                <ProductRemoveButton id={el._id} />
            </CardActions>
        </Card>
    );
};

export default ProductListItem;
