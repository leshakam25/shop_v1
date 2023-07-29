import clientPromise from "@/configs/mongo/index";
import {ProductModel} from "@/models/product.model";

let client
let db:any
let products:any

async function init() {
    if (db) return
    try {
        client = await clientPromise
        db = await client.db()
        products = await db.collection('products')
    } catch (error) {
        throw new Error('Failed to stablish products')
    }
}

;(async () => {
    await init()
})()

export async function getProducts() {
    try {
        if (!products) await init()
        const result = await products
            .find({})
            .limit(20)
            .map((product: ProductModel) => ({ ...product, _id: product._id.toString() }))
            .toArray()

        return {products: result}
    } catch (error) {
        return {error: "Failed to fetch products"}
    }
}