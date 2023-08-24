import React from 'react';
import Link from "next/link";
import {Button, Tooltip} from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const ProductCreateButton = () => {
    return (
        <Link href={`/products/create`}>
            <Tooltip title={"Добавить продукт"}>
                <Button color={'success'} variant={'contained'} size={'large'}>
                    <AddCircleOutlineIcon/>
                </Button>
            </Tooltip>
        </Link>
    );
};

export default ProductCreateButton;