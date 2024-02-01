
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
  useEffect(() => {
    // Dynamically load the Google Sign-In library script
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up script tag to avoid memory leaks
      document.body.removeChild(script);
    };
  }, []);
  

  return (
    <main>

      <div className="buttomg">
        <Header />
        <div className="image-container">
          <img className="image" src= "logo.svg"  alt="Logo" />
        </div>
        <div className="container">
          <div className="signin">
            <h2>Sign In</h2>
            <h4>Sign in to your Account</h4>
          </div>
          <div className="content">
            <div className="connect">
                <div className="facebook">
                  <div id="fb-root"></div>
                    <div
                      className="fb-login-button"
                      data-max-rows="1"
                      data-size="<medium, large>"
                      data-button-type="continue_with"
                      data-width="<100% or px>"
                      data-scope="<comma separated list of permissions, e.g. public_profile, email>"> 
                    </div>
                  </div>
                <div className="google">
                  <div
                    id="g_id_onload"
                    data-client_id="YOUR_GOOGLE_CLIENT_ID"
                    data-login_uri="https://your.domain/your_login_endpoint"
                    data-auto_prompt="false"
                  ></div>
                  <div
                    className="g_id_signin"
                    data-type="standard"
                    data-size="large"
                    data-theme="outline"
                    data-text="sign_in_with"
                    data-shape="rectangular"
                    data-logo_alignment="left"
                  ></div>
                </div>
              </div>
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

