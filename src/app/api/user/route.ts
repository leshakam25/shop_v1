import User from "@/schemas/user.schema";
import {NextResponse} from "next/server";
import {connectMongoDB} from "@/libs/mongodb";

//GET ALL
export async function GET() {
    await connectMongoDB();
    const users: any[] = await User.find();
    return NextResponse.json({users})
}


//DELETE ONE
export async function DELETE(request: any) {
    const id: any[] = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await User.findByIdAndDelete(id);
    return NextResponse.json({message: "User deleted"}, {status: 200})
}