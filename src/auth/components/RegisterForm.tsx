"use client"
import React, {useState} from 'react';
import {Alert, Box, Button, TextField, Typography} from "@mui/material";
import Link from "next/link";
const RegisterForm = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("");
    const [error] = useState<string>("")

    const handleSubmit = async (e: any) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{
                my: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: {xs: '100vw', sm: '200px'},
                gap: 1,
                borderRadius: 2
            }}>
                <Typography variant={'h5'} sx={{
                    opacity:0.6
                }}>
                    Регистрация
                </Typography>
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    type={'text'}
                    value={name}
                    label={'ФИО'}
                    fullWidth
                    variant={'outlined'}
                    size={'small'}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    type={'email'}
                    value={email}
                    label={'Почта'}
                    fullWidth
                    variant={'outlined'}
                    size={'small'}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    type={'password'}
                    value={password}
                    label={'Пароль'}
                    fullWidth
                    variant={'outlined'}
                    size={'small'}
                />
                <Button
                    type={"submit"}
                    fullWidth
                    variant={'contained'}
                    color={'success'}
                >
                    РЕГИСТРАЦИЯ
                </Button>
                <Link href={`/auth/login/`}>
                    <Button
                        sx={{
                            width: {xs: '100vw', sm: '200px'},
                        }}
                        variant={'outlined'}
                        color={'primary'}
                    >
                        ВХОД
                    </Button>
                </Link>
                {error &&
                    <Alert severity="error">{error}</Alert>
                }
            </Box>
        </form>
    );
};

export default RegisterForm;