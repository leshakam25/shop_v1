"use client"
import React from 'react';
import {Box, Typography} from "@mui/material";
import RemoveMessageButton from "@/components/Buttons/RemoveMessageButton";

const MessageItem = ({message}:any) => {
    return (
        <Box
        sx={{
            background:'lightblue',
            my:2,
            px:1,
            py:2,
            display: 'flex',
            flexDirection:'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}
        >
            <Typography variant={'h6'}>
                {message.message}
            </Typography>
            <RemoveMessageButton id={message.id}/>
        </Box>
    );
};

export default MessageItem;