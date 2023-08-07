"use client"
import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useRouter} from "next/navigation";

const ProductCreateForm = () => {
    const [label, setLabel] = useState('')
    const [description, setDescription] = useState('')
    const [shortDesc, setShortDesc] = useState('')
    const [tags, setTags] = useState('')
    const [currentPrice, setCurrentPrice] = useState('')
    const [oldPrice, setOldPrice] = useState('')
    const [image, setImage] = useState('')

    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!label || !description || !currentPrice) {
            alert("Title, description, price are required")
            return
        }

        try {
            const res = await fetch("/api/products/", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    label,
                    description,
                    shortDesc,
                    tags,
                    currentPrice,
                    oldPrice,
                    image
                }),
            })

            if (res.ok) {
                router.refresh()
                router.push("/products/list/")
            } else {
                throw new Error('Failed to create product')
            }
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
                <Typography variant={'h5'}>
                    Добавление товара
                </Typography>
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLabel(e.target.value)}
                    value={label}
                    variant={'outlined'}
                    label={'Название'}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                    value={description}
                    variant={'outlined'}
                    label={'Описание'}
                    multiline
                    rows={4}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setShortDesc(e.target.value)}
                    value={shortDesc}
                    variant={'outlined'}
                    label={'Краткое описание'}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTags(e.target.value)}
                    value={tags}
                    variant={'outlined'}
                    label={'Тэги'}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCurrentPrice(e.target.value)}
                    value={currentPrice}
                    variant={'outlined'}
                    label={'Цена'}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOldPrice(e.target.value)}
                    value={oldPrice}
                    variant={'outlined'}
                    label={'Старая цена'}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImage(e.target.value)}
                    value={image}
                    variant={'outlined'}
                    label={'Изображение'}
                />
                <Button
                    type={"submit"}
                    variant={'contained'}
                    color={'success'}
                >
                    Создать
                </Button>
            </Box>
        </form>
    );
};

export default ProductCreateForm;