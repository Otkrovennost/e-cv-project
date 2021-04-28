import React, { useState, useContext } from 'react';
import './Login.scss';
import axios from 'axios';
import AuthContext from '../../../../context/AuthContext';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
axios.defaults.withCredentials = true; // letting client to get cookies from the server

const useStyles = makeStyles((theme) => ({
  registration__button: {
    width: '45%',
    backgroundColor: '#8bc29a',
    '&:hover': {
      backgroundColor: 'rgb(114, 172, 145)',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  cssLabel: {
    color: 'black',
    '&$cssFocused': {
      color: `#8bc29a !important`,
    },
  },
  registration__item: {
    width: '100%',
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `#8bc29a !important`,
    },
  },

  cssFocused: {},

  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'black !important',
  },
}));

function Login({ setIsNewUser, isNewUser }) {
  const { loggedIn, getLoggedIn } = useContext(AuthContext);
  const classes = useStyles();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const validate = () => {
    let isError = false;
    const errors = {
      emailError: '',
      passwordError: '',
    };

    if (!loginData.email.includes('@')) {
      isError = true;
      errors.emailError = 'Invalid email';
    }

    if (loginData.password.length < 6) {
      isError = true;
      errors.passwordError = 'Password must be at least 6 characters';
    }

    setLoginData({
      ...loginData,
      ...errors,
    });

    return isError;
  };

  const login = async (e) => {
    e.preventDefault();
    const isValid = validate();

    if (!isValid) {
      try {
        await axios.post(
          'https://ecvapiserver.herokuapp.com/auth/login',
          loginData
        );
        getLoggedIn();
      } catch (error) {
        console.error(error);
      }
    }
  };

  console.log(loginData);

  return (
    <div className="login">
      <h2 className="login__title">Log In</h2>

      <form onSubmit={login} className="login__form">
        <div className="input-group">
          <TextField
            onChange={(e) =>
              setLoginData({
                ...loginData,
                email: e.target.value,
              })
            }
            name="email"
            variant="outlined"
            label="Email"
            autoComplete="off"
            className={classes.registration__item}
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
              inputMode: 'numeric',
            }}
          />
          <p className="email-error error">{loginData.emailError}</p>
        </div>

        <div className="input-group">
          <TextField
            onChange={(e) =>
              setLoginData({
                ...loginData,
                password: e.target.value,
              })
            }
            name="password"
            variant="outlined"
            label="Password"
            autoComplete="off"
            type="password"
            className={classes.registration__item}
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
              },
              inputMode: 'numeric',
            }}
          />
          <p className="email-error error">{loginData.passwordError}</p>
        </div>

        <div className="registration__row">
          <Button className={classes.registration__button} type="submit">
            Login
          </Button>
          <div
            onClick={() => setIsNewUser(!isNewUser)}
            className="registration__link"
          >
            Still Not Signed Up ? Do It!
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
