"use client"
import React from 'react';
import MessageListItem from "@/components/Chat/MessageListItem";
import {Box, Typography} from "@mui/material";
import MessageInput from "@/components/Chat/MessageInput";

const MessageList = ({messages}: any) => {
    return (
        <Box sx={{
            my: 2,
            overflow: 'auto',
            width: '100%'
        }}>
            <Typography variant={'h4'}>Чат</Typography>
            {messages && messages.map((el: any) => <MessageListItem key={el._id} message={el}/>)}
            <MessageInput/>
        </Box>
    );
};

export default MessageList;