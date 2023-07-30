"use client"
import React from 'react';
import {Box, Card, IconButton, Typography} from "@mui/material";

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
                <IconButton>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="blue"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                </IconButton>
                <IconButton>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="black"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-edit">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                </IconButton>
                <IconButton>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         stroke="red"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="feather feather-x-octagon">
                        <polygon
                            points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                </IconButton>
            </Box>
        </Card>
    );
};

export default ProductItem;