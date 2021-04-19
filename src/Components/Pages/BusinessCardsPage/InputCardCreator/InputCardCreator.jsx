import React, { useState } from 'react'

import {
    // Button,
    // Box,
    // Grid,
    // IconButton,
    // List,
    // ListItem,
    // ListItemText,
    TextField,
    // Typography,
} from '@material-ui/core';

const InputCardCreator = ({ businessCardData, setBusinessCardData }) => {
    const personArrKeys = ["name", "profession", "phone", "email", "extra"];

    const setKey = (key, value) => {
        console.log(key)
        setBusinessCardData({ ...businessCardData, [key]: value });
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            height: '500px',
            justifyContent: 'space-around',
            padding: '0 20px 20px 20px'
        }}>

            {personArrKeys.map(
                (el, index) => <TextField
                    label={el}
                    key={index}
                    variant="outlined"
                    autoComplete="off"
                    type="text"
                    onBlur={({ target: { value } }) => {
                        setKey(el, value);
                    }}
                />)
            }

        </div>
    )
}
export default InputCardCreator;