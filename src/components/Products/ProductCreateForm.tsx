"use client"
import React from 'react';
import {Box, Button, TextField} from "@mui/material";

const ProductCreateForm = () => {
    return (
        <form>
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                maxWidth:600,
                my:2,
                gap:1
            }}>
                <TextField variant={'filled'} placeholder={'Название'}/>
                <TextField variant={'filled'} placeholder={'Описание'} multiline rows={4}/>
                <Button variant={'contained'} color={'success'}>
                    Создать
                </Button>
            </Box>
        </form>
    );
};

export default ProductCreateForm;