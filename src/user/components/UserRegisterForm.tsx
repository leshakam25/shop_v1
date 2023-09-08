"use client"
import React, {useState} from 'react';
import {Alert, Box, Button, TextField, Typography} from "@mui/material";
import Link from "next/link";
import {IUser} from "@/user/interfaces/user.interface";
import {useRouter} from "next/navigation";

const UserRegisterForm = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("");
    const [role, setRole] = useState<string>("USER");
    const [error, setError] = useState<string>("")
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!name || !email || !password || !role) {
            setError("Заполните все поля")
            return
        }
        const user: IUser = {
            name: name,
            email: email,
            password: password,
            role: role
        }
        try {
            const res = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                }),
            });
            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push("/");
            }
        } catch
            (error) {
            alert(`Ошибка: ${error}`)
        }
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
                <Typography variant={'h5'} sx={{opacity: 0.6}}>
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
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRole(e.target.value)}
                    type={'text'}
                    value={role}
                    label={'Роль'}
                    fullWidth
                    variant={'outlined'}
                    size={'small'}
                    sx={{
                        display: 'none'
                    }}
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
                {error && (<Alert sx={{width: {xs: '100vw', sm: '170px'}}} severity="error">
                    <Typography variant={'body2'} color={'error'}>{error}</Typography>
                </Alert>)}
            </Box>
        </form>
    );
};

export default UserRegisterForm;