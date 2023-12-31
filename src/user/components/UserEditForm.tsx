"use client"
import React, {useState} from "react";
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

interface IUserEditFormProps {
    _id: string,
    user: IUser;
}

const UserEditForm: React.FC<IUserEditFormProps> = ({_id, user}) => {
    const editUser = useUser((state) =>state.editUser, shallow)

    const [newName, setNewName] = useState<string>(user.name);
    const [newEmail, setNewEmail] = useState<string>(user.email);
    const [newPassword, setNewPassword] = useState<string>("");
    const [newRole, setNewRole] = useState<string>(user.role);
    const [error, setError] = useState<string>("");

    const router = useRouter();

    const handleChange = (e: SelectChangeEvent) => {
        setNewRole(e.target.value as any)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            const user: IUser = {
                name: newName,
                email: newEmail,
                password: newPassword,
                role: newRole
            }
            editUser(_id, user)
            router.refresh();
            router.push("/user/list/");
        } catch (error: any) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    my: 2,
                    gap: 1
                }}
            >
                <Typography variant={"h5"}>Редактирование пользователя</Typography>
                <TextField
                    value={newName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewName(e.target.value)}
                    label={"ФИО"}
                    variant={"outlined"}
                    type={"text"}
                />
                <TextField
                    value={newEmail}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewEmail(e.target.value)}
                    label={"Почта"}
                    variant={"outlined"}
                    type={"email"}
                />
                <TextField
                    value={newPassword}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
                    label={"Пароль"}
                    variant={"outlined"}
                    type={"password"}
                />
                <FormControl fullWidth>
                    <InputLabel id="select-role">Роль</InputLabel>
                    <Select
                        value={newRole}
                        labelId="select-role"
                        label={"Роль"}
                        onChange={handleChange}
                    >
                        <MenuItem value={'ADMIN'}>Администратор</MenuItem>
                        <MenuItem value={'USER'}>Пользователь</MenuItem>
                        <MenuItem value={'MANAGER'}>Манагер</MenuItem>
                    </Select>
                </FormControl>
                <Button color={"success"} type={"submit"} variant={"contained"} size={"large"} fullWidth>
                    Обновить
                </Button>
                {error && <Alert severity="error">{error}</Alert>}
            </Box>
        </form>
    );
}


export default UserEditForm;