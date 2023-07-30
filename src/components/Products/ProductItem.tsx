"use client"
import React from 'react';
import {Card, Typography} from "@mui/material";

const ProductItem = ({el}: any) => {
    return (
        <Card key={el._id} sx={{
            width: {xs: "100%", md: '200px'},
            height: {xs: "100px", md: '200px'},
            mx: {xs: 0, md: 2},
            my: {xs: 2, md: 2},
            p: 0.4,
            background: "lightgreen",
            opacity: 0.9,
            ":hover": {
                opacity: 1
            }
        }}>
            <Typography variant={"h3"}>
                {el.label}
            </Typography>
            <Typography variant={"body1"}>
                {el.description}
            </Typography>
        </Card>
    );
};

export default ProductItem;