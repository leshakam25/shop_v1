import React from 'react';
import Link from "next/link";
import {IconButton, Tooltip} from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';

interface ProductShowButtonProps {
    id: string;
}

const ProductShowButton: React.FC<ProductShowButtonProps> = ({id}) => {
    return (
        <Link href={`/products/show/${id}`}>
            <Tooltip title={'Информация о товаре'}>
                <IconButton color={'primary'}>
                    <InfoIcon/>
                </IconButton>
            </Tooltip>
        </Link>
    );
};

export default ProductShowButton;