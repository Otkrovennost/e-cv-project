import React from 'react';

import {
    // Button,
    // Box,
    // Grid,
    // IconButton,
    // List,
    // ListItem,
    // ListItemText,
    TextField
    // Typography,
} from '@material-ui/core';



const InputCardCreator = ({ person, setPerson }) => {


    const personArrKeys = Object.keys(person);


    const setKey = (key, value) => {
        setPerson({ ...person, [key]: value });
    };


    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
            height: '500px',
            justifyContent: 'space-around',
            padding: '20px'
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