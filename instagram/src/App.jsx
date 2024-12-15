import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Profile_page from "./pages/profile_page";
import HomePage from "./pages/HomePage"; // Import HomePage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<Profile_page />} />
        <Route path="/home" element={<HomePage />} /> {/* Add HomePage route */}
      </Routes>
    </Router>
  );
}

export default App;