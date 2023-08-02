"use client"
import React from 'react';
import MessageItem from "@/components/Chat/Messageitem";
import {Box} from "@mui/material";

const MessageList = ({messages}: any) => {
    return (
        <Box sx={{
            overflow:'auto'
        }}>
            {messages && messages.map((el: any) => <MessageItem key={el._id} message={el}/>)}
        </Box>
    );
};

export default MessageList;