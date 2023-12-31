import React from 'react';
import {Box, CardMedia} from "@mui/material";

const Loading = () => {
    return (
        <Box sx={{
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <CardMedia component={'img'}
                       sx={{
                           width: "120px",
                           height: '120px'
                       }}
                       src={"https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif"}
            />
        </Box>
    );
};

export default Loading;