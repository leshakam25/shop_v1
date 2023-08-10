import React from 'react';
import {Metadata} from "next";
import MessageList from "@/components/Chat/MessageList";

export const metadata: Metadata = {
    title: 'Chat | Shop v1.0',
    description: 'Chat',
}

// const getMessages = async (): Promise<any> => {
//     const url = `${process.env.BASE_URL}/api/chat/`
//     try {
//         const res = await fetch(url,
//             {
//                 // next: {revalidate: 60},
//                 cache: "no-store"
//             });
//         if (!res.ok) {
//             throw new Error("Failed to fetch")
//         }
//         return res.json()
//     } catch (error) {
//         console.log("Error loading messages: ", error)
//     }
// }

const Page = () => {
    // const messages: any = await getMessages()
    return
    // (<>{messages && <MessageList data={messages.messages}/>}</>)
}

export default Page;