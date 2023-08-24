import {Product} from "@/interfaces/product.interface";

export const getProductById = async (_id: string): Promise<Product | undefined> => {
    const url = `http://localhost:4000/product/${_id}`
    try {
        const res = await fetch(url, {cache: 'no-store'});
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export const getProducts = async (): Promise<Product[] | undefined> => {
    const url = 'http://localhost:4000/product/';
    try {
        const res = await fetch(url, {cache: "no-store"});
        return await res.json();
    } catch (error) {
        console.log("Error loading products: ", error);
    }
};
