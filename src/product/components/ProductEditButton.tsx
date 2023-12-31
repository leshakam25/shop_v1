import React from 'react';
import Link from "next/link";
import {IconButton, Tooltip} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

interface ProductEditButtonProps {
    id: string;
}

const ProductEditButton: React.FC<ProductEditButtonProps> = ({id}) => {
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

