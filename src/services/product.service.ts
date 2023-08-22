import {Product} from "@/interfaces/product.interface";
import React from "react";

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
