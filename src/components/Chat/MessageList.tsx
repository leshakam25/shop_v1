import React from 'react';
import MessageListItem from "@/components/Chat/MessageListItem";
import {Box, Typography} from "@mui/material";
import MessageInput from "@/components/Chat/MessageInput";

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


const MessageList = async () => {
    const messages = await getMessages()
    return (
        <Box sx={{
            my: 2,
            overflow: 'auto',
            width: '100%'
        }}>
            <Typography variant={'h4'} sx={{mb: 2}}>Чат</Typography>
            {messages && messages.messages.map((el: any) => <MessageListItem key={el._id} message={el}/>)}
            <MessageInput/>
        </Box>
    );
};

export default MessageList;