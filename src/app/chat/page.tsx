import React from 'react';
import MessageList from "@/components/Chat/MessageList";
import MessageInput from "@/components/Chat/MessageInput";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Chat | Shop v1.0',
    description: 'Chat',
}

const getMessages = async ():Promise<any> => {
    try {
        const res = await fetch("http://localhost:3000/api/chat",
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
    return (
        <>
            <h2>Чат</h2>
            {messages && <MessageList messages={messages.messages}/>}
            <MessageInput/>
        </>
    );
};

export default Page;