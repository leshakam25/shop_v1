"use client"
import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import UserRemoveButton from "@/components/User/UserRemoveButton";

const UserListItem = ({user}: any) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            background: 'lightgray',
            p: 1,
            borderRadius: '8px',
            opacity: 0.9,
            ":hover": {
                opacity: 1
            }
        }}>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <Typography variant={'h6'}>
                        Имя: {user.name}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant={'h6'}>
                        Почта: {user.email}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Typography variant={'h6'}>
                        Роль: {user.role}
                    </Typography>
                </Grid>
            </Grid>
            <UserRemoveButton/>
        </Box>
    );
};

export default UserListItem;