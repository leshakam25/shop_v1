"use client"
import React, {useState} from 'react';
import {Alert, Box, Button, TextField} from "@mui/material";
import Link from "next/link";
import {signIn, SignInResponse} from "next-auth/react";
import {useRouter} from "next/navigation";

const LoginForm = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("")

    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const res: SignInResponse | undefined = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res?.error) {
                setError("Invalid Credentials");
                return;
            }

            router.replace("/");
        } catch (error) {
            console.log(error);
        }
    };

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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    type={'email'}
                    value={email}
                    placeholder={'Email'}
                    fullWidth
                    variant={'outlined'}
                    size={'small'}/>
                <TextField
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    type={'password'}
                    value={password}
                    placeholder={'Password'}
                    fullWidth
                    variant={'outlined'}
                    size={'small'}/>
                <Button
                    type={"submit"}
                    fullWidth
                    variant={'contained'}
                    color={'success'}>
                    LOGIN
                </Button>
                <Link href={`/auth/register/`}>
                    <Button
                        sx={{width: {xs: '100vw', sm: '200px'}}}
                        variant={'outlined'}
                        color={'primary'}>
                        REGISTER
                    </Button>
                </Link>
                {error && <Alert severity="error">{error}</Alert>}
            </Box>
        </form>
    );
};

export default LoginForm;