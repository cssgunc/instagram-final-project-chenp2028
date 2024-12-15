import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import igName from '../assets/igName.png';
import { LoginPic, download } from "../assets";
import Footer from "../conponents/Footer";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";


const LoginPage = () => {
  const apiKey = import.meta.env.VITE_SUPABASE_API_KEY;
  const dbURL = import.meta.env.VITE_SUPABASE_URL;
  const supabase = createClient(dbURL, apiKey);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Query the database to check if the username and password match
      const { data, error } = await supabase
        .from("profile")
        .select("user_handle, password")
        .eq("user_handle", username)
        .eq("password", password);

      if (error) {
        throw error;
      }

      // Check if a matching record was found
      if (data.length > 0) {
        setError("");
        navigate("/profile"); // Redirect to profile page
      } else {
        setError("Invalid username or password. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      setError("An error occurred during login. Please try again later.");
    }
  };

  return (
    <>
    <div className = "whole">

        <div className = "left">
            <img src = {LoginPic} />
        </div>

    <div className="login-page">
      <div className="login-container">

        <div className = "logo">
            <img src= {igName} />
        </div>
        

        <form onSubmit={handleLogin} className="login-form">
          {error && <p className="error-message">{error}</p>}
          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />

          <button type="submit" className="login-button">
            Log In
          </button>

        </form>

        <div class="divider">
            <span class="line"></span>
            <span class="or-text">OR</span>
            <span class="line"></span>
        </div>

        <div className = "item">
            <i class="fa-brands fa-facebook"></i>
            <button className="facebook-login0">Log in with Facebook</button>
        </div>

        <br></br>
        <a href="#" className="forgot-password">
            Forgot password?
        </a>

      </div>

      <div className = "sign-container">
        <div className="signup-prompt">
          Don't have an account? <a><Link to="/signup">Sign Up</Link></a>
        </div>
      </div>

      <p>Get the app.</p>

      <div className = 'download'>
        <img src = {download}/>
      </div>

    </div>

    </div>

    <div className = "footer0">
    <Footer/>
    </div>

    </>
  );
};

export default LoginPage;
