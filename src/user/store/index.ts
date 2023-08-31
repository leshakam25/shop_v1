import {create} from "zustand";
import {IUser} from "@/user/interfaces/user.interface";
import {createUser, editUser, getAllUsers, getUserById, removeUser} from "@/user/services/user.service";

type UserStore = {
    users: IUser[];
    user: IUser;
    loading: boolean;
    getAllUsers: () => Promise<void>;
    getUserById: (_id: string) => Promise<void>;
    removeUser: (_id: string) => Promise<void>;
    createUser: (user: IUser) => Promise<void>;
    editUser: (_id: string, user: IUser) => Promise<any>;
}

export const useUser = create<UserStore>()((set) => ({
    users: [],
    user: {
        name:'',
        email: '',
        password: '',
        role: ''
    },
    loading: false,
    getAllUsers: async () => {
        set({loading: true})
        const users = await getAllUsers()
        set({users, loading: false})
    },
    getUserById: async (_id: string) => {
        set({loading: true})
        const user: IUser = await getUserById(_id)
        set({user, loading: false})
    },
    removeUser: async (_id: string) => {
        set({loading: true})
        await removeUser(_id)
        set({loading: false})
    },
    createUser: async (user: IUser) => {
        set({loading: true})
        await createUser(user)
        set({loading: false})
    },
    editUser: async (_id: string, user: IUser) => {
        set({loading: true})
        await editUser(_id, user)
        set({loading: false})
    }
}))