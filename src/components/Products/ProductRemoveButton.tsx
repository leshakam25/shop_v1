"use client"
import React from 'react';
import { IconButton, Tooltip } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

interface ProductRemoveButtonProps {
    id: string | undefined;
}

const ProductRemoveButton: React.FC<ProductRemoveButtonProps> = ({ id }) => {
    const router: AppRouterInstance = useRouter();

    const removeProduct = async () => {
        const confirmed = confirm('Are you sure?');

        if (confirmed) {
            const res: Response = await fetch(`http://localhost:4000/product/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
                router.push('/products/list');
            }
        }
    };

    return (
        <Tooltip title={'Delete'}>
            <IconButton onClick={removeProduct} color={'error'}>
                <HighlightOffIcon />
            </IconButton>
        </Tooltip>
    );
};

export default ProductRemoveButton;