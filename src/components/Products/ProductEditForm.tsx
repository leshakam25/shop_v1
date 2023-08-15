"use client"
import { Box, TextField, Button } from '@mui/material';
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {Product} from "@/interfaces/product.interface";


interface Props {
    product: Product;
}

const ProductEditForm = ({ product }: Props) => {
    const [newProduct, setNewProduct] = useState<Product>({
        _id: product._id,
        title: product.title,
        desc: product.desc,
        price: product.price,
        images: product.images,
    });

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const url = `http://localhost:4000/product/${product._id}`
            await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });
            router.refresh();
            router.push('/products/list/');
        } catch (error) {
            console.log(error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewProduct((prevState) => ({
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
                <TextField
                    name="title"
                    label="Название"
                    value={newProduct.title}
                    onChange={handleInputChange}
                    variant="outlined"
                />
                <TextField
                    name="desc"
                    label="Описание"
                    value={newProduct.desc}
                    onChange={handleInputChange}
                    variant="outlined"
                    multiline
                    rows={4}
                />
                <TextField
                    name="price"
                    label="Цена"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    variant="outlined"
                />
                <TextField
                    name="images"
                    label="Изображение"
                    value={newProduct.images}
                    onChange={handleInputChange}
                    variant="outlined"
                />
                <Button type="submit" variant="contained" color="success">
                    Обновить
                </Button>
            </Box>
        </form>
    );
};

export default ProductEditForm;
