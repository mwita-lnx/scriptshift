// SignInContainer.tsx
"use client"
// SignInContainer.tsx
import React from 'react';

interface SignInContainerProps {
  toggleForm: () => void;
}

const SignInContainer: React.FC<SignInContainerProps> = ({ toggleForm }) => {
  return (
    <div className="form-container sign-in-container">
      <form action="#">
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
          <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <span>or use your account</span>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </form>
      
    </div>
  );
};

export default SignInContainer;

