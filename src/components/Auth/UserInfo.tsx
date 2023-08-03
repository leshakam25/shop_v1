import React from 'react';
import {Box, Button, Typography} from "@mui/material";

const UserInfo = ({profile}: any) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background:'lightgray',
                width:'320px',
                minHeight:'120px'
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography variant={'h6'}>Имя:</Typography>
                <Typography variant={'h6'}>{profile && profile.name}</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Typography variant={'h6'}>Email:</Typography>
                <Typography variant={'h6'}>{profile && profile.email}</Typography>
            </Box>
            <Button variant={'contained'} color={'error'}>
                Logout
            </Button>
        </Box>
    );
};

export default UserInfo;