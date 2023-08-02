import React from 'react';
import MessageList from "@/components/Chat/MessageList";
import MessageInput from "@/components/Chat/MessageInput";

const messages: any[] = [
    {message:"Hello"},
    {message:"Hello1"},
    {message:"Hello2"},
    {message:"Hello3"},
    {message:"Hello4"},
    {message:"Hello5"},
    {message:"Hello6"},
    {message:"Hello7"},
]

const Page = () => {
    return (
        <>
            <h2>Чат</h2>
            <MessageList messages={messages}/>
            <MessageInput/>
        </>
    );
};

export default Page;