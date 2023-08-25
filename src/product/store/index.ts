import {createWithEqualityFn} from "zustand/traditional";
import {getAllProducts, getProductById} from "@/product/services/product.service";

type useProducts = {
    products: any[];
    loading: boolean;
    getAllProducts: () => Promise<Void>;
    getProductById: (value: string) => Promise<Void>;
}

export const useProducts = createWithEqualityFn<useProducts>()((set) => ({
    users: [],
    loading: false,
    getAllProducts: async () => {
        set({loading: true})
        const users = await getAllProducts()
        set({users, loading: false})
    },
    getProductById: async (_id) => {
        set({loading: true})
        const users = await getProductById(_id)
        set({users, loading: false})
    }
}))