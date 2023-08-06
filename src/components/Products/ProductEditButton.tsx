import React from 'react';
import {IconButton, Tooltip} from "@mui/material";
import Link from "next/link";
import EditIcon from '@mui/icons-material/Edit';

const ProductEditButton = ({id}: any) => {
    return (
        <Link href={`/products/edit/${id}`}>
            <Tooltip title={'Редактировать'}>
            <IconButton color={'primary'}>
              <EditIcon/>
            </IconButton>
            </Tooltip>
        </Link>
    );
};

export default ProductEditButton;