import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(null);

  const getLoggedIn = async () => {
    const loggedInResponse = await axios.get(
      'http://localhost:5000/auth/loggedIn'
    );
    setLoggedIn(loggedInResponse.data);
  };

  useEffect(() => {
    getLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
