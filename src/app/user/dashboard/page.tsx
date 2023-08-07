import UserInfo from "@/components/User/UserInfo";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Your profile | Shop v1.0',
    description: 'Profile',
}

const Page = () => {
    return <main><UserInfo/></main>
};

export default Page;