import React from 'react';
import Link from "next/link";
import {IconButton} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

const ProductShowButton = ({id}: any) => {
    return (
        <Link href={`/products/show/${id}`}>
            <IconButton color={'primary'}>
                <InfoIcon/>
            </IconButton>
        </Link>
    );
};

export default ProductShowButton;