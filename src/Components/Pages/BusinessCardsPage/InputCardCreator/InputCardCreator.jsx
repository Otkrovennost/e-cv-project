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

const InputCardCreator = ({ person, setPerson }) => {

    // const [person, setPerson] = useState(
    //     {
    //         name: 'its your name',
    //         profession: 'profession',
    //         phone: 'phone call',
    //         email: 'email',
    //         extra: 'extra info',
    //     }
    // )
    // const [newPerson, setNewPerson] = useState({});
    const personArrKeys = [ "name", "profession", "phone", "email", "extra"];
    console.log(personArrKeys)

    // let changeInput = (event, el) => {
    //     let input = newPerson;
    //     input[el] = event.target.value;
    //     setNewPerson(input)
    // }

    const setKey = (key, value) => {
      console.log(key)
      setPerson({ ...person, [key]: value });
    };

    console.log(person)
  

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
                    // onChange={(event) => changeInput(event, el)}
                    onBlur={({ target: { value } }) => {
                      setKey(el, value);
                    }}
                />)
            }

        </div>
    )
}
export default InputCardCreator;