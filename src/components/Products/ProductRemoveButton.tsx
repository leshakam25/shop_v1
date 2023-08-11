"use client"
import React from 'react';
import {IconButton, Tooltip} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";

const ProductRemoveButton = ({id}: any) => {
    const router: AppRouterInstance = useRouter()
    const removeProduct = async () => {
        const confirmed = confirm('Are you sure?')

        if (confirmed) {
            const res: Response = await fetch(`http://212.60.20.190:4000/product/${id}`, {
                method: "DELETE",
            })
            if (res.ok) {
                router.refresh();
            }
        }
    }
    return (
        <Tooltip title={'Удалить'}>
            <IconButton onClick={removeProduct} color={'error'}>
                <HighlightOffIcon/>
            </IconButton>
        </Tooltip>
    );
};

export default ProductRemoveButton;