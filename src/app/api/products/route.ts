import {getProducts} from "../../../services/products";
import {NextResponse} from "next/server";

export async function GET(req: Request) {
    try {
        const {products, error} = await getProducts()
        if (error) throw new Error(error)
        return NextResponse.json(products)
    } catch (error) {
        throw new Error('Failed to stablish products')

    }
}

// export const getAllProducts = async (req: Request, res: Response) => {
//     if (req.method === 'GET') {
//         try {
//             const {products, error} = await getProducts()
//             if (error) throw new Error(error)
//
//             return res.status(200).json({products})
//         } catch (error) {
//             return res.status(500).json({error})
//         }
//     }
//     res.setHeader('Allow', ['GET'])
//     res.status(425).end(`Method ${req.method} is not supported`)
// }
