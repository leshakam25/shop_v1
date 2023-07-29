import {getProducts} from "@/services/products";
import {NextResponse} from "next/server";

export async function GET() {
    try {
        const {products, error} = await getProducts()
        if (error) throw new Error(error)
        return NextResponse.json(products)
    } catch (error) {
        throw new Error('Failed to stablish products')
    }
}
