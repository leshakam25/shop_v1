import React from 'react';
import MessageList from "@/components/Chat/MessageList";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Chat | Shop v1.0',
    description: 'Chat',
}

const getMessages = async ():Promise<any> => {
    try {
        const res = await fetch(`/api/chat/`,
            {
                // next: {revalidate: 60},
                cache: "no-store"
            });
        if (!res.ok) {
            throw new Error("Failed to fetch")
        }
        return res.json()
    } catch (error) {
        console.log("Error loading messages: ", error)
    }
}


const Page = async () => {
    const messages = await getMessages()
    return <main> {messages &&<MessageList messages={messages.messages}/>}</main>
};

export default Page;