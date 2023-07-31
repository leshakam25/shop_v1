"use client"
import React from 'react';
import {Box, Card, Typography} from "@mui/material";
import RemoveButton from "@/components/Buttons/RemoveButton";
import EditButton from "@/components/Buttons/EditButton";

const ProductItem = ({el}: any) => {

    return (
        <Card key={el._id} sx={{
            position: 'relative',
            width: {xs: "100%", md: '200px'},
            height: {xs: "100px", md: '240px'},
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
            <Box
                sx={{
                    position: "absolute",
                    right: 2,
                    bottom: 2
                }}
            >
                <EditButton id={el._id}/>
                <RemoveButton id={el._id}/>
            </Box>
        </Card>
    );
};

export default ProductItem;