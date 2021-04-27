import React from 'react'

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

import {
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

import './InputCardCreator.scss';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const InputCardCreator = ({ businessCardData, setBusinessCardData }) => {
    const personArrKeys = ["name", "profession", "phone", "email", "extra"];

    const setKey = (key, value) => {
        console.log(key)
        setBusinessCardData({ ...businessCardData, [key]: value });
    };

    return (
      <div className="card-form">
        <ThemeProvider theme={theme}>
          {personArrKeys.map(
            (el, index) => <TextField
                label={el}
                key={index}
                variant="outlined"
                autoComplete="off"
                type="text"
                style={{marginBottom: '20px'}}
                onBlur={({ target: { value } }) => {
                  setKey(el, value);
                }}
            />)
          }
        </ThemeProvider>
      </div>
    )
}
export default InputCardCreator;