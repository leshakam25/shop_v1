import React from 'react';
import MessageList from "@/components/Chat/MessageList";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Chat | Shop v1.0',
    description: 'Chat',
}


const Page = () => {return <MessageList/>}

export default Page;