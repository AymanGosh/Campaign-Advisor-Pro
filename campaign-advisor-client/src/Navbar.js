// Navbar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Navbar() {
  const { logout } = useAuth(); // Destructure isLoggedIn and logout from useAuth
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions (e.g., clear authentication state)
    // Then navigate to the login page
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logout-container">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
