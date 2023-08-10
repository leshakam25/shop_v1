"use client"
import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useRouter} from "next/navigation";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";

const ProductEditForm = ({product}: any) => {
    const [newTitle, setNewTitle] = useState(product.title)
    const [newDesc, setNewDesc] = useState(product.desc)
    const [newPrice, setNewPrice] = useState(product.price)
    const [newImages, setNewImages] = useState(product.images)


    const router: AppRouterInstance = useRouter()
    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();
        try {
            const res: Response = await fetch(`${process.env.BASE_URL}/product/${product._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: newTitle,
                    desc: newDesc,
                    price: newPrice,
                    images: newImages
                })
            })
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
                width: '100%',
                my: 2,
                gap: 1
            }}>
                <TextField
                    value={newTitle}
                    variant={'outlined'}
                    label={'Название'}
                    onChange={e => setNewTitle(e.target.value)}
                />
                <TextField
                    value={newDesc}
                    variant={'outlined'}
                    label={'Описание'}
                    onChange={e => setNewDesc(e.target.value)}
                    multiline
                    rows={4}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPrice(e.target.value)}
                    value={newPrice}
                    variant={'outlined'}
                    label={'Цена'}
                />

                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewImages(e.target.value)}
                    value={newImages}
                    variant={'outlined'}
                    label={'Изображениея'}
                />
                <Button type={"submit"} variant={'contained'} color={'success'}>
                    Обновить
                </Button>
            </Box>
        </form>
    );
};

export default ProductEditForm;