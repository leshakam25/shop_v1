import Message from "@/schemas/message.schema";
import {NextResponse} from "next/server";
import {connectMongoDB} from "@/libs/mongodb";

// CREATE
export async function POST(request: any) {
    const {text} = await request.json()
    await connectMongoDB()
    await Message.create({text});
    return NextResponse.json({message: "Message send"}, {status: 201})
}

//GET ALL
export async function GET() {
    await connectMongoDB();
    const messages: any[] = await Message.find();
    return NextResponse.json({messages})
}

//DELETE ONE
export async function DELETE(request: any) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Message.findByIdAndDelete(id);
    return NextResponse.json({message: "Message deleted"}, {status: 200})
}