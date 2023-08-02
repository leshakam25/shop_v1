"use client"
import React from 'react';
import {Box, Button, TextField} from "@mui/material";

const MessageInput = () => {
    const handleSubmit = () => {
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: "100%",
            }}
            >
                <TextField
                    size={'medium'}
                    fullWidth
                    placeholder={'Введите сообщение'}
                />
                <Button
                    sx={{
                        ml:1
                    }}
                    size={'large'}
                    variant={'contained'}
                    type={"submit"}>
                    Отправить
                </Button>
            </Box>
        </form>
    );
};

export default MessageInput;