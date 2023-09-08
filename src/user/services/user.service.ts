import {IUser} from "@/user/interfaces/user.interface";

//БАЗОВЫЙ АДРЕС ЗАПРОСОВ ПОЛЬЗОВАТЕЛЯ
const url = 'http://localhost:4000/user/'

//ПОЛУЧЕНИЕ ВСЕХ ПОЛЬЗОВАТЕЛЕЙ
export const getAllUsers = async (): Promise<IUser[] | undefined> => {
    try {
        const res = await fetch(url,
            {
                // next: {revalidate: 60},
                cache: "no-store"
            });
        return res.json()
    } catch (error) {
        console.log("Error loading products: ", error)
    }
}

//СОЗДАНИЕ ПОЛЬЗОВАТЕЛЯ
export const createUser = async (user: IUser) => {
    const {name, email, password, role} = user
    const res = await fetch('/api/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(name, email, password, role)
    })

    if (res.ok) {
        alert('User created')
        return 'ok'
    } else {
        console.log(user)
        console.log("Registration failed")
    }
}

//УДАЛЕНИЕ ПОЛЬЗОВАТЕЛЯ
export const removeUser = async (_id: string) => {
    const confirmed = confirm('Are you sure?')
    if (confirmed) {
        await fetch(`${url}` + `${_id}`, {method: "DELETE"})
    }
}

//ПОЛУЧЕНИЕ ПОЛЬЗОВАТЕЛЯ ПО ID
export const getUserById = async (_id: string) => {
    try {
        const res = await fetch(`${url}` + `${_id}`, {cache: 'no-store'})
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

//ИЗМЕНЕНИЕ ПОЛЬЗОВАТЕЛЯ ПО ID
export const editUser = async (_id: string, user: IUser) => {
    await fetch(`${url}` + `${_id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
        })
    });
}