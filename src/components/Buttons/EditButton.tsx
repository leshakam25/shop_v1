import React from 'react';
import {IconButton} from "@mui/material";
import Link from "next/link";
import EditIcon from '@mui/icons-material/Edit';

const EditButton = ({id}: any) => {
    return (
        <Link href={`http://localhost:3000/products/edit/${id}`}>
            <IconButton color={'primary'}>
              <EditIcon/>
            </IconButton>
        </Link>
    );
};

export default EditButton;