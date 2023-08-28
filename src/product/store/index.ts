import {getAllProducts, getProductById} from "@/product/services/product.service";
import {create} from "zustand";

type ProductsStore = {
    products: any[];
    loading: boolean;
    getAllProducts: () => Promise<void>;
    getProductById: (_id: string) => Promise<void>;
}

export const useProducts = create<ProductsStore>()((set) => ({
    products: [],
    loading: false,
    getAllProducts: async () => {
        set({loading: true})
        const products = await getAllProducts()
        set({products, loading: false})
    },
    getProductById: async (_id) => {
        set({loading: true})
        const product = await getProductById(_id)
        set({products: [product], loading: false})
    }
}))