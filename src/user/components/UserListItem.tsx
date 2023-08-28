"use client"
import React from 'react';
import {Box, Grid, Typography} from "@mui/material";
import UserRemoveButton from "@/user/components/UserRemoveButton";
import UserEditButton from "@/user/components/UserEditButton";
import {IUser} from "@/user/interfaces/user.interface";

const UserListItem = ({el}: IUser) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            background: 'lightgray',
            p: 1,
            mb: 2,
            borderRadius: '8px',
            opacity: 0.9,
            ":hover": {
                opacity: 1
            }
        }}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Typography variant={'h6'}>
                        {el.name}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant={'h6'}>
                        {el.email}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Typography variant={'h6'}>
                        {el.role}
                    </Typography>
                </Grid>
            </Grid>
            <UserEditButton _id={el._id}/>
            <UserRemoveButton _id={el._id}/>
        </Box>
    );
};

export default UserListItem;