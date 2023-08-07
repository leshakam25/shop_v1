import React from 'react';
import MessageList from "@/components/Chat/MessageList";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Chat | Shop v1.0',
    description: 'Chat',
}

const getMessages = async (): Promise<any> => {
    const url = `${process.env.BASE_URL}/api/chat/`
    try {
        const res = await fetch(url,
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
    return <main> {messages && <MessageList data={messages.messages}/>}</main>
};

export default Page;