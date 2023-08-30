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

interface IUserEditFormProps {
    user: IUser;
}

const UserEditForm: React.FC<IUserEditFormProps> = ({user}) => {
    const [newName, setNewName] = useState<string>(user.name);
    const [newEmail, setNewEmail] = useState<string>(user.email);
    const [newPassword, setNewPassword] = useState<string>("");
    const [newRole, setNewRole] = useState<any>(user.role);
    const [error, setError] = useState<string>("");

    const router = useRouter();

    const handleChange = (e: SelectChangeEvent) => {
        setNewRole(e.target.value as any)
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        try {
            await fetch(`http://localhost:4000/user/${user._id}`, {
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
            });
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
                        <MenuItem value={"admin"}>Администратор</MenuItem>
                        <MenuItem value={"user"}>Пользователь</MenuItem>
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