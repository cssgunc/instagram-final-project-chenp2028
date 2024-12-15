import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css"; // Import styling
import igName from '../assets/igName.png';
import { download } from "../assets";
import Footer from "../conponents/Footer";
import { createClient } from "@supabase/supabase-js";

function SignupPage(){
  const apiKey = import.meta.env.VITE_SUPABASE_API_KEY;
  const dbURL = import.meta.env.VITE_SUPABASE_URL;
  const supabase = createClient(dbURL, apiKey);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userHandle: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const createUser = async () => {
    try {
      const { firstName, lastName, userHandle, password } = formData;

      // Insert user data into Supabase
      const { error } = await supabase.from("profile").insert({
        first_name: firstName,
        last_name: lastName,
        user_handle: userHandle,
        password: password,
      });

      if (error) {
        throw error;
      }

      // Navigate to profile page upon successful signup
      navigate("/profile");
    } catch (error) {
      console.error("Error creating user:", error.message);
      setErrorMessage("Failed to create account. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      formData.firstName &&
      formData.lastName &&
      formData.userHandle &&
      formData.password
    ) {
      await createUser();
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <>
    <div className = "whole0">
    <div className="signup-container">
      <div className="signup-form">

        <div className="logo0">
        <img src = {igName} />
        </div>

        <p className="subtitle">
          Sign up to see photos and videos from your friends.
        </p>

        <button className="facebook-login">Log in with Facebook</button>

        <div className="divider">
          <span className="line"></span>
          <span className="or-text">OR</span>
          <span className="line"></span>
        </div>

        

        <form onSubmit={handleSubmit}>
        <input
                id="first_name"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />

          <input
            id = "last_name"

            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
          <input
            id = "user_handle"
            type="text"
            name="userHandle"
            placeholder="User Handle"
            value={formData.userHandle}
            onChange={handleInputChange}
            required
          />
          <input
            id = "password"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          
          <div className = "terms">
            <p>
        People who use our service may have uploaded your contact information to Instagram.{" "}
          <a href="/">Learn More</a>
        </p>

        <p>
          By signing up, you agree to our{" "}
          <a href="/">Terms</a>, <a href="/">Privacy Policy</a> and{" "}
          <a href="/">Cookies Policy</a>.
        </p>
          </div>
        

          <button type="submit" onClick={() => createUser()} className="signup-button">
            Sign Up
          </button>
        </form>

        

      </div>
    </div>

    <div className = "container2">
        <p>Have an account?{""} <a href="/">Log in</a></p>
    </div>

    <p>Get the app.</p>

    <img className = "download0" src = {download}/>

    <div className="footer1">
    <Footer/>
    </div>

    </div>
   
    </>

  );
};

export default SignupPage;
