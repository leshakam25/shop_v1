import {NextRequest, NextResponse} from "next/server";
import {connectMongoDB} from "@/lib/mongodb";
import User from "@/user/schemas/user.schema";

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        const {name, email, password, role}: {
            name: string;
            email: string;
            password: string;
            role: string;
        } = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10)
        await connectMongoDB();
        await User.create({name, email, password: hashedPassword, role})

        return NextResponse.json({message: "Пользователь зарегистрирован"}, {status: 201})
    } catch (error) {
        return NextResponse.json({message: "Произошла ошибка при регистрации пользователя"}, {status: 500});
    }
}