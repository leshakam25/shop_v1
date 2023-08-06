import {NextResponse} from "next/server";
import {connectMongoDB} from "@/configs/mongo.config";
import Product from "@/schemas/product.schema";

// CREATE
export async function POST(request: any) {
    const {
        label,
        description,
        shortDesc,
        tags,
        currentPrice,
        oldPrice,
        image
    } = await request.json()
    await connectMongoDB()
    await Product.create({
        label,
        description,
        shortDesc,
        tags,
        currentPrice,
        oldPrice,
        image
    });
    return NextResponse.json({message: "Product created"}, {status: 201})
}

//GET ALL
export async function GET() {
    await connectMongoDB();
    const products: any[] = await Product.find();
    return NextResponse.json({products})
}

//DELETE ONE
export async function DELETE(request: any) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Product.findByIdAndDelete(id);
    return NextResponse.json({message: "Product deleted"}, {status: 200})
}

