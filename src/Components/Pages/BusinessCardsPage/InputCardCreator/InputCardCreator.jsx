import React from 'react'

import {
    Button,
    Box,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    TextField,
    Typography,
} from '@material-ui/core';

const InputCardCreator = ({ label }) => {
    return (
        <div>
            <TextField
                id="outlined-basic"
                label={label}
                variant="outlined" />

        </div>
    )
}
export default InputCardCreator;