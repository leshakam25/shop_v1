import {Product} from "@/product/interfaces/product.interface";

export const getProductById = async (_id: string): Promise<Product | undefined>  => {
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

export const getProducts = async (): Promise<any> => {
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