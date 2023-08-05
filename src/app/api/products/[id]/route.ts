import {connectMongoDB} from "@/configs/mongo.config";
import Product from "@/schemas/createProduct.schema";
import {NextResponse} from "next/server";

//EDIT
export async function PUT(request: any, {params}: any) {
    const {id} = params
    const {
        newLabel: label,
        newDescription: description,
        newShortDesc: shortDesc,
        newTags: tags,
        newCurrentPrice: currentPrice,
        newOldPrice: oldPrice,
        newImage: image
    } = await request.json()
    await connectMongoDB()
    await Product.findByIdAndUpdate(id, {
        label,
        description,
        shortDesc,
        tags,
        currentPrice,
        oldPrice,
        image
    })
    return NextResponse.json({message: "Product updated"}, {status: 200})
}

//GET ONE
export async function GET(request: any, {params}: any) {
    const {id} = params
    await connectMongoDB()
    const product = await Product.findOne({_id: id})
    return NextResponse.json({product}, {status: 200})
}