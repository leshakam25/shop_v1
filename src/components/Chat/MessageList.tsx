"use client"
import React, {useState} from 'react';
import MessageListItem from "@/components/Chat/MessageListItem";
import {Box, Typography} from "@mui/material";
import MessageInput from "@/components/Chat/MessageInput";

const MessageList = ({data}: any) => {
    const [messages] = useState(data)
    return (
        <Box sx={{
            my: 2,
            overflow: 'auto',
            width: '100%'
        }}>
            <Typography variant={'h4'} sx={{mb: 2}}>Чат</Typography>
            {messages && messages.map((el: any,i: any) => <MessageListItem key={i} message={el}/>)}
            <MessageInput/>
        </Box>
    );
};

export default MessageList;