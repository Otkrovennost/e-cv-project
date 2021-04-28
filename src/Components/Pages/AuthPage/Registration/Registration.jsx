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
  emailError: 'Email can not be blank',
  passwordError: 'Password can not be blank',
  passwordVerifyError: '',
  emailDirty: false,
  passwordDirty: false,
  passwordVerifyDirty: false,
};

function Registration({ setIsNewUser, isNewUser, props }) {
  const { loggedIn, getLoggedIn } = useContext(AuthContext);
  const [isSuccess, setIsSuccess] = useState(false);
  const classes = useStyles();
  const [registerData, setRegisterData] = useState(initialState);

  console.log(registerData);

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setRegisterData({
          ...registerData,
          emailDirty: true,
        });
        break;
      case 'password':
        setRegisterData({
          ...registerData,
          passwordDirty: true,
        });
        break;
      case 'passwordVerify':
        setRegisterData({
          ...registerData,
          passwordVerifyDirty: true,
        });
        break;
    }
  };

  const emailHandler = (e) => {
    console.log(e.target.value);
    setRegisterData({
      ...registerData,
      email: e.target.value,
    });
    const re = /\S+@\S+\.\S+/;
    if (!re.test(e.target.value)) {
      setRegisterData({
        ...registerData,
        emailError: 'Invalid email',
      });
      return false;
    } else {
      setRegisterData({
        ...registerData,
        emailError: '',
      });
    }
  };

  const passwordHandler = (e) => {
    setRegisterData({
      ...registerData,
      password: e.target.value,
    });
    if (e.target.value.length < 6) {
      setRegisterData({
        ...registerData,
        passwordError: 'Password must be at least 6 characters',
      });
    } else {
      setRegisterData({
        ...registerData,
        passwordError: '',
        passwordVerifyError: '',
      });
    }
  };

  // const passwordVerifyHandler = (e) => {
  //   setRegisterData({
  //     ...registerData,
  //     password: e.target.value,
  //   });
  //   if (e.target.value !== registerData.password) {
  //     setRegisterData({
  //       ...registerData,
  //       passwordVerifyError: 'Passwords must match',
  //     });
  //   } else {
  //     setRegisterData({
  //       ...registerData,
  //       passwordVerifyError: '',
  //     });
  //   }
  // };

  const register = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/auth', registerData);
      getLoggedIn();
      // setRegisterData(initialState);
    } catch (error) {
      console.log(error);
    }
  };

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
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => emailHandler(e)}
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
              {registerData.emailDirty && registerData.emailError && (
                <p className="email-error error">{registerData.emailError}</p>
              )}
            </div>
            <div className="input-group">
              <TextField
                onBlur={(e) => blurHandler(e)}
                onChange={(e) => passwordHandler(e)}
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
              {registerData.passwordDirty && registerData.passwordError && (
                <p className="email-error error">
                  {registerData.passwordError}
                </p>
              )}
            </div>
            <div className="input-group">
              <TextField
                onBlur={(e) => blurHandler(e)}
                // onChange={(e) => passwordVerifyHandler(e)}
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
              {registerData.passwordVerifyDirty &&
                registerData.passwordVerifyError && (
                  <p className="email-error error">
                    {registerData.passwordVerifyError}
                  </p>
                )}
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
