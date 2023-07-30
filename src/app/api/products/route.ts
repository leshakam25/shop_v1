import {NextResponse} from "next/server";
import {connectMongoDB} from "@/configs/mongodb.config";
import Product from "@/schemas/createProduct.schema";


export async function POST(request: any) {
    const {label, description} = await request.json()
    await connectMongoDB()
    await Product.create({label, description});
    return NextResponse.json({message: "Product created"}, {status: 201})
}

export async function GET() {
    await connectMongoDB();
    const products: any[] = await Product.find();
    return NextResponse.json({products})
}

export async function DELETE(request: any) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Product.findByIdAndDelete(id);
    return NextResponse.json({message: "Product deleted"}, {status: 200})
}

