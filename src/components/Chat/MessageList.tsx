"use client"
import React from 'react';
import MessageItem from "@/components/Chat/Messageitem";
import {Box} from "@mui/material";

const MessageList = ({messages}: any) => {
    return (
        <Box sx={{
            overflow:'auto'
        }}>
            {messages && messages.map((el: any, i: any) => <MessageItem key={i} message={el}/>)}
        </Box>
    );
};

export default MessageList;