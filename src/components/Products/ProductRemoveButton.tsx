"use client"
import React from 'react';
import {IconButton} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";

const ProductRemoveButton = ({id}: any) => {
    const router: AppRouterInstance = useRouter()
    const removeProduct = async () => {
        const confirmed = confirm('Are you sure?')

        if (confirmed) {
            const res: Response = await fetch(`/api/products?id=${id}`, {
                method: "DELETE"
            })
            if (res.ok) {
                router.refresh();
            }
        }
    }
    return (
        <IconButton onClick={removeProduct} color={'error'}>
            <HighlightOffIcon/>
        </IconButton>
    );
};

export default ProductRemoveButton;