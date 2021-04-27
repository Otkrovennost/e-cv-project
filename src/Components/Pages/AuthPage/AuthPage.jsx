import React, { useState, useRef, useEffect } from 'react';
import Header from '../../Common/Header/Header';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import './AuthPage.scss';

function AuthPage() {
  
  const [isNewUser, setIsNewUser] = useState(true);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="auth-page">
          {isNewUser ? (
            <Registration setIsNewUser={setIsNewUser} isNewUser={isNewUser} />
          ) : (
            <Login setIsNewUser={setIsNewUser} isNewUser={isNewUser} />
          )}
        </div>
      </div>
    </>
  );
}

export default AuthPage;
