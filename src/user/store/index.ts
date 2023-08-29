import {create} from "zustand";
import {IUser} from "@/user/interfaces/user.interface";
import {getAllUsers, getUserById, removeUser} from "@/user/services/user.service";

type UsersStore = {
    users: IUser[];
    loading: boolean;
    getAllUsers: () => Promise<void>;
    getUserById: (_id: string) => Promise<void>;
    removeUser: (_id: string) => Promise<void>;
}

export const useUsers = create<UsersStore>()((set) => ({
    users: [],
    loading: false,
    getAllUsers: async () => {
        set({loading: true})
        const users = await getAllUsers()
        set({users, loading: false})
    },
    getUserById: async (_id: string) => {
        set({loading: true})
        const user: IUser = await getUserById(_id)
        set({users: [user], loading: false})
    },
    removeUser: async (_id: string) => {
        set({loading: true})
        await removeUser(_id)
        set({loading: false})
    },
}))