"use client"
import React, {FormEvent, useState} from 'react';
import {
    Alert,
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography
} from "@mui/material";
import {useRouter} from "next/navigation";
import {IRole, IUser} from "@/user/interfaces/user.interface";
import {useUser} from "@/user/store";
import {shallow} from "zustand/shallow";


const UserCreateForm = () => {
    const createUser = useUser((state) =>state.createUser, shallow)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState<IRole>()
    const [error, setError] = useState('')

    const handleChange = (e: SelectChangeEvent) => {
        setRole(e.target.value as any);
    };

    const router = useRouter()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!name || !email || !password || !role) {
            setError("Заполните поля")
            return
        }
        try {
            const user: IUser = {
                name,
                email,
                password,
                role
            }
            createUser(user)
            router.push('/user/list/')
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
                        value={role}
                        labelId="select-role"
                        label={"Роль"}
                        onChange={handleChange}
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
    )
        ;
};

export default UserCreateForm;