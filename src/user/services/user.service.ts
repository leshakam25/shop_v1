import {IUser} from "@/user/interfaces/user.interface";

const url = 'http://localhost:4000/user/'

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

export const createUser = async (user: IUser) => {
    const res = await fetch("http://localhost:4000/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

    if (res.ok
    ) {
        alert('User created')
        return 'ok'
    } else {
        console.log(user)
        console.log("Registration failed")
    }
}

export const removeUser = async (_id: string) => {
    const confirmed = confirm('Are you sure?')
    if (confirmed) {
        await fetch(`${url}` + `${_id}`, {method: "DELETE"})
    }
}

export const getUserById = async (_id: string) => {
    try {
        const res = await fetch(`${url}` + `${_id}`, {cache: 'no-store'})
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export const editUser = async (_id:string,user: IUser) => {
    await fetch(`http://localhost:4000/user/${_id}`, {
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