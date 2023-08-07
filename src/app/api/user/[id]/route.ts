import {connectMongoDB} from "@/configs/mongo.config";
import {NextResponse} from "next/server";
import User from "@/schemas/user.schema";
import bcrypt from "bcryptjs";

//EDIT
export async function PUT(request: any, {params}: any) {
    const {id} = params
    const {
        newName: name,
        newEmail: email,
        newPassword: password,
        newRole: role
    } = await request.json()
    const hashedPassword = await bcrypt.hash(password,10)
    await connectMongoDB()
    await User.findByIdAndUpdate(id, {
        name,
        email,
        hashedPassword,
        role
    })
    return NextResponse.json({message: "User updated"}, {status: 200})
}

//GET ONE
export async function GET(request: any, {params}: any) {
    const {id} = params
    await connectMongoDB()
    const user = await User.findOne({_id: id})
    return NextResponse.json({user}, {status: 200})
}