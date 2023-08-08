import {connectMongoDB} from "@/libs/mongodb";
import User from "@/schemas/user.schema";
import {NextResponse} from "next/server";

export async function POST(req: any) {
    try {
        await connectMongoDB();
        const {email} = await req.json();
        const user = await User.findOne({email}).select("_id");
        console.log(user)
        return NextResponse.json({user})
    } catch (error) {
        console.log(error)
    }
}