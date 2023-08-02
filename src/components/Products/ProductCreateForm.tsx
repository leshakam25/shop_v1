"use client"
import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useRouter} from "next/navigation";

const ProductCreateForm = () => {
    const [label, setLabel] = useState('')
    const [description, setDescription] = useState('')

    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!label || !description) {
            alert("Title and description are required")
            return
        }

        try {
            const res = await fetch("/api/products/", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({label, description}),
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
                maxWidth: 600,
                my: 2,
                gap: 1
            }}>
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLabel(e.target.value)}
                    value={label}
                    variant={'filled'}
                    placeholder={'Название'}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                    value={description}
                    variant={'filled'}
                    placeholder={'Описание'}
                    multiline
                    rows={4}
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