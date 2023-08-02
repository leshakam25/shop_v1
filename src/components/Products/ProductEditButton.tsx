import React from 'react';
import {IconButton} from "@mui/material";
import Link from "next/link";
import EditIcon from '@mui/icons-material/Edit';

const ProductEditButton = ({id}: any) => {
    return (
        <Link href={`/products/edit/${id}`}>
            <IconButton color={'primary'}>
              <EditIcon/>
            </IconButton>
        </Link>
    );
};

export default ProductEditButton;