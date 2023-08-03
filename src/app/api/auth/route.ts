import {NextResponse} from "next/server";
import {connectMongoDB} from "@/configs/mongo.config";
import User from "@/schemas/user.schema";
import bcrypt from "bcryptjs"

export async function POST(req: any): Promise<any> {
    try {
        const {name, email, password} = await req.json();
        const hashedPassword = await bcrypt.hash(password,10)
        await connectMongoDB();
        await User.create({name, email, password:hashedPassword});

        return NextResponse.json({message: "User registered successfully"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "An error occured"}, {status: 500})
    }
}