"use client"
import React, {useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import Link from "next/link";


const RegisterForm = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("")

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (!name || !email || !password) {
            setError("Заполните поля")
            return
        }
        try {
            const res = await fetch("/api/auth/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            })

            if (res.ok) {
                const form = e.target
                form.reset();
            } else {
                console.log("Registration failed")
            }
        } catch (error) {
            console.log("Registration failed", error)
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
                background: {xs: 'none', sm: 'lightgray'},
                p: {xs: 0, sm: 4},
                borderRadius: 2
            }}>
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    value={name}
                    placeholder={'Name'}
                    fullWidth
                    variant={'outlined'}
                    size={'small'}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    value={email}
                    placeholder={'Email'}
                    fullWidth
                    variant={'outlined'}
                    size={'small'}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    value={password}
                    placeholder={'Password'}
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
                    REGISTER
                </Button>
                <Link href={`/auth/login/`}>
                    <Button
                        sx={{
                            width: {xs: '100vw', sm: '200px'},
                        }}
                        variant={'outlined'}
                        color={'primary'}
                    >
                        LOGIN
                    </Button>
                </Link>
                {error &&
                    <Typography color={'error'}>
                        {error}
                    </Typography>
                }
            </Box>
        </form>
    );
};

export default RegisterForm;