// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Navbar() {
    const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions (e.g., clear authentication state)
    // Then navigate to the login page
    navigate('/login');
  };

  return (
    <nav className="navbar">

      <div className="logout-container">
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
