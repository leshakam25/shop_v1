import UserInfo from "@/components/Auth/UserInfo";
import {Metadata} from "next";
// import {getServerSession} from "next-auth";
// import {authOptions} from "@/app/api/auth/[...nextauth]/route";
// import {redirect} from "next/navigation";

export const metadata: Metadata = {
    title: 'Your profile | Shop v1.0',
    description: 'Profile',
}

const Page = async () => {
    // const session = await getServerSession(authOptions)
    // if (!session) redirect("/auth/login")
    return <UserInfo/>
};

export default Page;