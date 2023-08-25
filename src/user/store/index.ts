import {getUserById, getAllUsers, removeUser, editUserById} from "@/user/services/user.service";
import {createWithEqualityFn} from "zustand/traditional";

type UseUsers = {
    users: any[];
    loading: boolean;
    getAllUsers: () => Promise<Void>;
    getUserById: (value: string) => Promise<Void>;
}

export const useUsers = createWithEqualityFn<UseUsers>()((set) => ({
    users: [],
    loading: false,
    getAllUsers: async () => {
        set({loading: true})
        const users = await getAllUsers()
        set({users, loading: false})
    },
    getUserById: async (_id) => {
        set({loading: true})
        const users = await getUserById(_id)
        set({users, loading: false})
    },
    removeUser: async (_id) => {
        set({loading: true})
         await removeUser(_id)
        set({loading: false})
    },
}))