import {NextResponse} from "next/server";
import {connectMongoDB} from "@/configs/mongo.config";
import User from "@/schemas/user.schema";

//CREATE USER
export async function POST(req: any): Promise<any> {
    try {
        const {name, email, password, role} = await req.json();
        await connectMongoDB();
        await User.create({name, email, password, role});
        return NextResponse.json({message: "User registered successfully"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "An error occurred"}, {status: 500})
    }
}