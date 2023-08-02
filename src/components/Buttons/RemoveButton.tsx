"use client"
import React from 'react';
import {IconButton} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const RemoveButton = ({id}: any) => {
    // const router = useRouter()
    const removeProduct = async () => {
        const confirmed = confirm('Are you sure?')

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
                method: "DELETE"
            })
            if (res.ok) {
                // router.refresh();
                window.location.reload()
            }
        }
    }
    return (
        <IconButton onClick={removeProduct} color={'error'}>
            <HighlightOffIcon/>
        </IconButton>
    );
};

export default RemoveButton;