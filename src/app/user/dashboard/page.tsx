import UserInfo from "@/components/Auth/UserInfo";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Your profile | Shop v1.0',
    description: 'Profile',
}

const Page = () => {
    return <UserInfo/>
};

export default Page;