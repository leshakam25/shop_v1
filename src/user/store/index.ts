import {getAllUsers, getUserById, removeUser} from "@/user/services/user.service";
import {create} from "zustand";

type UsersStore = {
    users: any[];
    loading: boolean;
    getAllUsers: () => Promise<void>;
    getUserById: (_id: string) => Promise<void>;
}

export const useUsers = create<UsersStore>()((set) => ({
    users: [],
    user: {},
    loading: false,
    getAllUsers: async () => {
        set({loading: true})
        const users = await getAllUsers()
        set({users, loading: false})
    },
    getUserById: async (_id: string) => {
        set({loading: true})
        const user = await getUserById(_id)
        set({users: [user], loading: false})
    },
    removeUser: async (_id: string) => {
        set({loading: true})
        await removeUser(_id)
        set({loading: false})
    },
}))