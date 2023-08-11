"use client"
import React, {useState} from 'react';
import {useRouter} from "next/navigation";
import {Alert, Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context";

const UserEditForm = ({user}:any) => {
    const [newName, setNewName] = useState(user.name)
    const [newEmail, setNewEmail] = useState(user.email)
    const [newPassword, setNewPassword] = useState('')
    const [newRole, setNewRole] = useState(user.role)
    const [error] = useState('')

    const router: AppRouterInstance = useRouter()
    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();
        try {
            const res = await fetch(`${process.env.BASE_URL}/user/${user._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: newName,
                    email: newEmail,
                    password: newPassword,
                    role: newRole
                })
            })
            router.refresh()
            router.push("/user/list/")
        } catch (error) {
            console.log(error)
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
                    Редактирование пользователя
                </Typography>
                <TextField
                    value={newName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewName(e.target.value)}
                    label={'ФИО'}
                    variant={'outlined'}
                    type={'text'}
                />
                <TextField
                    value={newEmail}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewEmail(e.target.value)}
                    label={'Почта'}
                    variant={'outlined'}
                    type={'email'}
                />
                <TextField
                    value={newPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
                    label={'Пароль'}
                    variant={'outlined'}
                    type={'password'}
                />
                <FormControl fullWidth>
                    <InputLabel id="select-role">Роль</InputLabel>
                    <Select
                        labelId="select-role"
                        value={newRole}
                        label={"Роль"}
                        onChange={(e) => setNewRole(e.target.value)}
                    >
                        <MenuItem value={'admin'}>Администратор</MenuItem>
                        <MenuItem value={'user'}>Пользователь</MenuItem>
                    </Select>
                </FormControl>
                <Button
                    color={'success'}
                    type={"submit"}
                    variant={'contained'}
                    size={'large'}
                    fullWidth>
                    Обновить
                </Button>
                {error &&
                    <Alert severity="error">{error}</Alert>
                }
            </Box>
        </form>
    );
};

export default UserEditForm;