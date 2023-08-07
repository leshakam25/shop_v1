import {NextResponse} from "next/server";
import {connectMongoDB} from "@/configs/mongo.config";
import User from "@/schemas/user.schema";
import bcrypt from "bcryptjs"

//CREATE USER
export async function POST(req: any): Promise<any> {
    try {
        const {name, email, password, role} = await req.json();
        const hashedPassword = await bcrypt.hash(password,10)
        await connectMongoDB();
        await User.create({name, email, password:hashedPassword, role});
        return NextResponse.json({message: "User registered successfully"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "An error occurred"}, {status: 500})
    }
}