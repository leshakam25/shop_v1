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

export const removeUser = async (_id: string) => {
    const confirmed = confirm('Are you sure?')
    if (confirmed) {
        await fetch(`${url}`+`${_id}`, {method: "DELETE"})
    }
}

export const getUserById = async (_id: string) => {
    try {
        const res = await fetch(`${url}`+`${_id}`, {cache: 'no-store'})
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
