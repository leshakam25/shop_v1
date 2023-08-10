"use client"
import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";

const ProductEditForm = ({product}: any) => {
    const [newLabel, setNewLabel] = useState(product.label)
    const [newDescription, setNewDescription] = useState(product.description)
    const [newShortDesc, setNewShortDesc] = useState(product.shortDesc)
    const [newTags, setNewTags] = useState(product.tags)
    const [newCurrentPrice, setNewCurrentPrice] = useState(product.currentPrice)
    const [newOldPrice, setNewOldPrice] = useState(product.oldPrice)
    const [newImage, setNewImage] = useState(product.image)

    // const router: AppRouterInstance = useRouter()
    const handleSubmit = async (e: any): Promise<void> => {
        // e.preventDefault();
        // try {
        //     const res: Response = await fetch(`/api/products/${product._id}`, {
        //         method: "PUT",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             newLabel,
        //             newDescription,
        //             newShortDesc,
        //             newTags,
        //             newCurrentPrice,
        //             newOldPrice,
        //             newImage})
        //     })
        //
        //     if (!res.ok) {
        //         throw new Error("Failed to update product")
        //     }
        //     router.refresh()
        //     router.push("/products/list/")
        // } catch (error) {
        //     console.log(error)
        // }
    }
    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                width: '100%',
                my: 2,
                gap: 1
            }}>
                <TextField
                    value={newLabel}
                    variant={'outlined'}
                    label={'Название'}
                    onChange={e => setNewLabel(e.target.value)}
                />
                <TextField
                    value={newDescription}
                    variant={'outlined'}
                    label={'Описание'}
                    onChange={e => setNewDescription(e.target.value)}
                    multiline
                    rows={4}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewShortDesc(e.target.value)}
                    value={newShortDesc}
                    variant={'outlined'}
                    label={'Краткое описание'}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTags(e.target.value)}
                    value={newTags}
                    variant={'outlined'}
                    label={'Тэги'}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewCurrentPrice(e.target.value)}
                    value={newCurrentPrice}
                    variant={'outlined'}
                    label={'Цена'}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewOldPrice(e.target.value)}
                    value={newOldPrice}
                    variant={'outlined'}
                    label={'Старая цена'}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewImage(e.target.value)}
                    value={newImage}
                    variant={'outlined'}
                    label={'Изображение'}
                />
                <Button type={"submit"} variant={'contained'} color={'success'}>
                    Обновить
                </Button>
            </Box>
        </form>
    );
};

export default ProductEditForm;