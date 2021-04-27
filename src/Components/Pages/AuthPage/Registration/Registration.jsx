import React, { useState, useContext } from 'react';
import './Registration.scss';
import axios from 'axios';
import AuthContext from '../../../../context/AuthContext';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Success from '../../../Common/Succes/Success';
import { useForm } from 'react-hook-form';
axios.defaults.withCredentials = true;

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
  registration__item: {
    width: '100%',
  },
  cssLabel: {
    color: 'black',
    '&$cssFocused': {
      color: `#8bc29a !important`,
    },
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

const initialState = {
  email: '',
  password: '',
  passwordVerify: '',
  emailError: '',
  passwordError: '',
  passwordVerifyError: '',
  basicError: '',
};

function Registration({ setIsNewUser, isNewUser, props }) {
  const { loggedIn, getLoggedIn } = useContext(AuthContext);
  const [isSuccess, setIsSuccess] = useState(false);
  const classes = useStyles();
  const [registerData, setRegisterData] = useState(initialState);

  const validation = () => {
    let emailError = '';
    let passwordError = '';
    let passwordVerifyError = '';

    if (!registerData.email.includes('@')) {
      emailError = 'Type in valid email';
      setRegisterData({
        ...registerData,
        emailError,
      });
      return false;
    }
    if (registerData.password.length < 6) {
      passwordError = 'Password must be at least 6 symbols';
      setRegisterData({
        ...registerData,
        passwordError,
      });
      return false;
    }

    console.log(registerData);

    if (registerData.password !== registerData.passwordVerify) {
      passwordVerifyError = 'Passwords should match';
      setRegisterData({
        ...registerData,
        passwordVerifyError,
      });
      return false;
    }

    return true;
  };

  const register = async (e) => {
    e.preventDefault();
    const isValid = validation();
    if (isValid) {
      try {
        await axios.post('http://localhost:5000/auth', registerData);
        getLoggedIn();
        setRegisterData(initialState);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="registration">
      {isSuccess ? (
        <Success />
      ) : (
        <>
          <h2 className="registration__title">Registration</h2>
          <p className="error">{registerData.basicError}</p>
          <form onSubmit={register} className="registration__form">
            <div className="input-group">
              <TextField
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    email: e.target.value,
                  })
                }
                name="email"
                variant="outlined"
                autoComplete="off"
                label="Email"
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
              <p className="email-error error">{registerData.emailError}</p>
            </div>
            <div className="input-group">
              <TextField
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    password: e.target.value,
                  })
                }
                name="password"
                type="password"
                variant="outlined"
                autoComplete="off"
                label="Password"
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
              <p className="password-error error">
                {registerData.passwordError}
              </p>
            </div>
            <div className="input-group">
              <TextField
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    passwordVerify: e.target.value,
                  })
                }
                name="passwordVerify"
                type="password"
                autoComplete="off"
                variant="outlined"
                label="Verify Password"
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
              <p className="password_verify-error error">
                {registerData.passwordVerifyError}
              </p>
            </div>
            <div className="registration__row">
              <Button className={classes.registration__button} type="submit">
                Sign Up
              </Button>
              <div
                onClick={() => setIsNewUser(!isNewUser)}
                className="registration__link"
              >
                Already With Us? Login !
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default Registration;
