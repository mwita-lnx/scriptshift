// SignUpContainer.tsx
"use client"
// SignUpContainer.tsx
import React from 'react';


interface SignUpContainerProps {
  toggleForm: () => void;
}

const SignUpContainer: React.FC<SignUpContainerProps> = ({ toggleForm }) => {
  return (
    <div className="form-container sign-up-container">
      <form action="#">
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
          <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <span>or use your email for registration</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button >Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpContainer;

