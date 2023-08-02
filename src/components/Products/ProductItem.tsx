"use client"
import React from 'react';
import {Box, Card, Typography} from "@mui/material";
import ProductRemoveButton from "@/components/Products/ProductRemoveButton";
import ProductEditButton from "@/components/Products/ProductEditButton";

const ProductItem = ({el}: any) => {

    return (
        <Card key={el._id} sx={{
            position: 'relative',
            width: {xs:"100%",sm:'30%'},
            height: {xs: "120px", sm: '100px'},
            mx: {xs: 0, md: 1},
            mb: 2,
            p: 2,
            overflow:'auto',
            background: "lightgreen",
            opacity: 0.9,
            ":hover": {
                opacity: 1
            }
        }}>
            <Typography variant={"h4"}>
                {el.label}
            </Typography>
            <Typography variant={"body1"}>
                {el.description}
            </Typography>
            <Box
                sx={{
                    position: "absolute",
                    right: 4,
                    top: 4
                }}
            >
                <ProductEditButton id={el._id}/>
                <ProductRemoveButton id={el._id}/>
            </Box>
        </Card>
    );
};

export default ProductItem;