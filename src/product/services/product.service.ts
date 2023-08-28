import {IProduct} from "@/product/interfaces/product.interface";

export const getProductById = async (_id: string): Promise<IProduct | undefined>  => {
    const url = `http://localhost:4000/product/${_id}`
    try {
        const res = await fetch(url, {
            cache: 'no-store'
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}

export const getAllProducts = async (): Promise<IProduct[] | undefined> => {
    const url = 'http://127.0.0.1:4000/product/'
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