"use client"
import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";

const ProductEditForm = ({id, label, description}: any) => {
    const [newLabel, setNewLabel] = useState(label)
    const [newDescription, setNewDescription] = useState(description)
    const router: AppRouterInstance = useRouter()
    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();
        try {
            const res: Response = await fetch(`/api/products/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({newLabel, newDescription})
            })

            if (!res.ok) {
                throw new Error("Failed to update product")
            }
            router.refresh()
            router.push("/products/list/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                maxWidth: 600,
                my: 2,
                gap: 1
            }}>
                <TextField
                    value={newLabel}
                    variant={'filled'}
                    placeholder={'Название'}
                    onChange={e => setNewLabel(e.target.value)}
                />
                <TextField
                    value={newDescription}
                    variant={'filled'}
                    placeholder={'Описание'}
                    onChange={e => setNewDescription(e.target.value)}
                    multiline
                    rows={4}
                />
                <Button type={"submit"} variant={'contained'} color={'success'}>
                    Обновить
                </Button>
            </Box>
        </form>
    );
};

export default ProductEditForm;