"use client"
import React from 'react';
import {Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography} from "@mui/material";
import ProductRemoveButton from "@/components/Products/ProductRemoveButton";
import ProductEditButton from "@/components/Products/ProductEditButton";
import ProductShowButton from "@/components/Products/ProductShowButton";

const ProductItem = ({el}: any) => {

    return (
        <Card key={el._id}
              sx={{
                  boxShadow: '5',
                  width: {
                      xs: "100%", md: "45%", lg: "30%",
                  },
                  my: {xs:1,sm:2},
                  mx: {xs:0,sm:2}

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
                    {el.description}
                </Typography>
                <Typography variant={"body1"}>
                    Стоимость: {el.currentPrice}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ProductShowButton id={el._id}/>
                <ProductEditButton id={el._id}/>
                <ProductRemoveButton id={el._id}/>
                {/*<ExpandMore*/}
                {/*    expand={expanded}*/}
                {/*    onClick={handleExpandClick}*/}
                {/*    aria-expanded={expanded}*/}
                {/*    aria-label="show more"*/}
                {/*>*/}
                {/*    <ExpandMoreIcon />*/}
                {/*</ExpandMore>*/}
            </CardActions>
        </Card>
    );
};

export default ProductItem;