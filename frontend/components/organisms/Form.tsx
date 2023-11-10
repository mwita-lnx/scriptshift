// Form.tsx
"use client"
import React, { useState } from 'react';
import SignUpContainer from '../molecules/signup'
import SignInContainer from '../molecules/signin'
import 'styles/form.css'

const Form: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`container ${isSignUp ? '' : 'right-panel-active'}`}>
      {isSignUp ? <SignUpContainer toggleForm={toggleForm} /> : <SignInContainer toggleForm={toggleForm} />}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us, please login with your personal info.  If you don't have an Account
              click the button below to sign up </p>
            <button className="ghost" onClick={toggleForm}>Sign Up</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start a journey with us or click the buton below to continue your journey </p>
            <button className="ghost" onClick={toggleForm}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
