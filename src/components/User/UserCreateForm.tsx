"use client"
import React, {useState} from 'react';
import {Alert, Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {useRouter} from "next/navigation";


const UserCreateForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [error, setError] = useState('')

    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (!name || !email || !password || !role) {
            setError("Заполните поля")
            return
        }
        try {
            // const resUserExists = await fetch("/api/auth/userExists", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({email})
            // })
            //
            // const {user} = await resUserExists.json()
            // if (user) {
            //     setError("User already exists");
            //     return
            // }
            const user = {
                name,
                email,
                password,
                role
            }
            const res = await fetch("http://212.60.20.190:4000/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })

            if (res.ok) {
                const form = e.target
                form.reset();
                router.push("/user/list")
            } else {
                console.log(user)
                console.log("Registration failed")
            }
        } catch (error) {
            console.log("Registration failed", error)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{
                display: "flex",
                flexDirection: 'column',
                width: '100%',
                my: 2,
                gap: 1
            }}>
                <Typography variant={'h5'}>
                    Добавление пользователя
                </Typography>
                <TextField
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    label={'ФИО'}
                    variant={'outlined'}
                    type={'text'}
                />
                <TextField
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    label={'Почта'}
                    variant={'outlined'}
                    type={'email'}
                />
                <TextField
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    label={'Пароль'}
                    variant={'outlined'}
                    type={'password'}
                />
                <FormControl fullWidth>
                    <InputLabel id="select-role">Роль</InputLabel>
                    <Select
                        labelId="select-role"
                        value={role}
                        label={"Роль"}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <MenuItem value={'ADMIN'}>Администратор</MenuItem>
                        <MenuItem value={'USER'}>Пользователь</MenuItem>
                        <MenuItem value={'MANAGER'}>Манагер</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    color={'success'}
                    type={"submit"}
                    variant={'contained'}
                    size={'large'}
                    fullWidth>
                    Добавить
                </Button>
                {error && <Alert severity="error">{error}</Alert>}
            </Box>
        </form>
    );
};

export default UserCreateForm;