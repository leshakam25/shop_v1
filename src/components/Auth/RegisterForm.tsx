"use client"
import React, {useState} from 'react';
import {Alert, Box, Button, TextField} from "@mui/material";
import Link from "next/link";
import {useRouter} from "next/navigation";


const RegisterForm = () => {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("")

    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (!name || !email || !password) {
            setError("Заполните поля")
            return
        }
        try {
            const resUserExists = await fetch("/api/auth/userExists/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email})
            })

            const {user} = await resUserExists.json()
            if (user) {
                setError("User already exists");
                return
            }

            const res = await fetch("/api/auth/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    role: "user"
                })
            })

            if (res.ok) {
                const form = e.target
                form.reset();
                router.push("/auth/login")
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
                borderRadius: 2
            }}>
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    type={'text'}
                    value={name}
                    label={'Name'}
                    fullWidth
                    variant={'outlined'}
                    size={'small'}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    type={'email'}
                    value={email}
                    label={'Email'}
                    fullWidth
                    variant={'outlined'}
                    size={'small'}
                />
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    type={'password'}
                    value={password}
                    label={'Password'}
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
                    <Alert severity="error">{error}</Alert>
                }
            </Box>
        </form>
    );
};

export default RegisterForm;