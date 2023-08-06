"use client"
import React from 'react';
import {Card, CardActions, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import ProductRemoveButton from "@/components/Products/ProductRemoveButton";
import ProductEditButton from "@/components/Products/ProductEditButton";
import ProductShowButton from "@/components/Products/ProductShowButton";

const ProductListItem = ({el}: any) => {
    return (
        <Card key={el._id}
              sx={{
                  boxShadow: '0',
                  background: 'lightgray',
                  width: {
                      xs: "100%", md: "45%", lg: "30%",
                  },
                  mb: {xs: 1, sm: 3},
              }}>
            <CardHeader
                title={el.label}
                subheader={el.shortDesc}

            />
            <CardMedia
                component="img"
                height="120"
                image={el.image}
                alt="no image"
            />
            <CardContent>
                <Typography variant={"body1"}>
                    Стоимость: {el.currentPrice}
                </Typography>
                <Typography variant={"body1"}>
                    {el.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ProductShowButton id={el._id}/>
                <ProductEditButton id={el._id}/>
                <ProductRemoveButton id={el._id}/>
            </CardActions>
        </Card>
    );
};

export default ProductListItem;