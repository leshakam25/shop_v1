"use client"
import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from '@mui/material';
import {useRouter} from 'next/navigation';
import {Product} from "@/interfaces/product.interface";

const ProductCreateForm: React.FC = () => {
    const [product, setProduct] = useState<Product>({
        _id: '',
        title: '',
        desc: '',
        price: 1,
        images: [],
    });

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const {title, desc, price, images} = product;

        if (!title || !desc || !price) {
            alert('Title, description, and price are required');
            return;
        }

        try {
            const res = await fetch('http://localhost:4000/product/', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    desc,
                    price,
                    images,
                }),
            });

            if (res.ok) {
                router.refresh()
                router.push('/products/list');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setProduct((prevState: Product) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    my: 2,
                    gap: 1,
                }}
            >
                <Typography variant="h5">Add Product</Typography>
                <TextField
                    name="title"
                    label="Название"
                    variant="outlined"
                    value={product.title}
                    onChange={handleChange}
                    required
                />
                <TextField
                    name="desc"
                    label="Описание"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={product.desc}
                    onChange={handleChange}
                    required
                />
                <TextField
                    name="price"
                    label="Цена"
                    variant="outlined"
                    type="number"
                    value={product.price}
                    onChange={handleChange}
                    required
                />
                <TextField
                    name="images"
                    label="Изображения"
                    variant="outlined"
                    value={product.images}
                    onChange={handleChange}
                />
                <Button type="submit" variant="contained" color="success">
                    Create
                </Button>
            </Box>
        </form>
    );
};

export default ProductCreateForm;