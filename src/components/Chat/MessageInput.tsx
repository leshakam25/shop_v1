"use client"
import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {useRouter} from "next/navigation";

const MessageInput = () => {
    const [text, setText] = useState('')
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!text) {
            alert("Text are required")
            return
        }

        try {
            const res = await fetch("/api/chat/", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({text}),

            })

            if (res.ok) {
                router.refresh()
                router.push("/chat")
                setText('')
            } else {
                throw new Error('Failed to send message')
            }
        } catch (error) {
            console.log(error)
        }

    }


    const router = useRouter()

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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
                    value={text}
                    size={'small'}
                    fullWidth
                    variant={'standard'}
                    placeholder={'Введите сообщение'}
                />
                <Button
                    sx={{
                        ml:1,
                    }}
                    color={'success'}
                    size={'large'}
                    variant={'contained'}
                    type={"submit"}>
                    <SendIcon/>
                </Button>
            </Box>
        </form>
    );
};

export default MessageInput;