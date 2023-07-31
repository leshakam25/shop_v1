"use client"
import React from 'react';
import {IconButton} from "@mui/material";

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
        <IconButton onClick={removeProduct}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="red"
                 strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="feather feather-x-octagon">
                <polygon
                    points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
        </IconButton>
    );
};

export default RemoveButton;