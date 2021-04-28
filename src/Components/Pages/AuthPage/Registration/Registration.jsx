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
};

function Registration({ setIsNewUser, isNewUser, props }) {
  const { loggedIn, getLoggedIn } = useContext(AuthContext);
  const [isSuccess, setIsSuccess] = useState(false);
  const classes = useStyles();
  const [registerData, setRegisterData] = useState(initialState);

  const validate = () => {
    let isError = false;
    const errors = {
      emailError: '',
      passwordError: '',
      passwordVerifyError: '',
    };

    if (!registerData.email.includes('@')) {
      isError = true;
      errors.emailError = 'Invalid email';
    }

    if (registerData.password.length < 6) {
      isError = true;
      errors.passwordError = 'Password must be at least 6 characters';
    }

    if (registerData.password !== registerData.passwordVerify) {
      isError = true;
      errors.passwordVerifyError = 'Passwords do not match';
    }

    setRegisterData({
      ...registerData,
      ...errors,
    });

    return isError;
  };

  console.log(registerData);

  const register = async (e) => {
    e.preventDefault();
    const isError = validate();

    if (!isError) {
      try {
        await axios.post(
          'https://ecvapiserver.herokuapp.com/auth',
          registerData
        );
        getLoggedIn();
        setRegisterData({
          email: '',
          password: '',
          passwordVerify: '',
          emailError: '',
          passwordError: '',
          passwordVerifyError: '',
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log(registerData);

  return (
    <div className="registration">
      {isSuccess ? (
        <Success />
      ) : (
        <>
          <h2 className="registration__title">Registration</h2>
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
              <p className="email-error error">{registerData.passwordError}</p>
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
              <p className="email-error error">
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
