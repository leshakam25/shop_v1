"use client"
import React from 'react';
import {Box, Typography} from "@mui/material";
import MessageRemoveButton from "@/components/Chat/MessageRemoveButton";

const MessageItem = ({message}:any) => {
    return (
        <Box
        sx={{
            background:'lightblue',
            mb:2,
            px:1,
            py:2,
            display: 'flex',
            flexDirection:'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}
        >
            <Typography variant={'h6'}>
                {message.text}
            </Typography>
            <MessageRemoveButton id={message._id}/>
        </Box>
    );
};

export default MessageItem;