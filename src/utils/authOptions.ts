import {AuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {connectMongoDB} from "@/configs/mongo.config";
import User from "@/schemas/user.schema";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const {email, password}: any = credentials

                try {
                    await connectMongoDB();
                    const user = await User.findOne({email});

                    if (!user) {
                        return null;
                    }

                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (!passwordsMatch) {
                        return null;
                    }

                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                }
            },
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/login"
    }
}