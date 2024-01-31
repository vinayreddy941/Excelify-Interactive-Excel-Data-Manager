
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import "./style.css";

const SignIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/Uploads");
  };

  return (
    <main>
      <div>
        <Header />
        <div className="image-container">
          <img className="image" src="logo.svg" alt="Logo" />
        </div>
        <div className="container">
          <div className="signin">
            <h2>Sign In</h2>
            <h4>Sign in to your Account</h4>
          </div>
          <div className="content">
            
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username or Email address</label>
              <input type="text" id="username" name="username" required />

              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />

              <p className="forgot">
                <a href="#">Forgot password?</a>
              </p>
              <button type="submit" className="signin-container green" onClick={handleSubmit}>
                Sign In
              </button>
              <h4>
                Don't have an account? <a href="register.html">Register here</a>
              </h4>
            </form>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </main>
  );
};

export default SignIn;


