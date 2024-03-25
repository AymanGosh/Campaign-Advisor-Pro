// Sidebar.js
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Menu</h3>
      </div>
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/loaders">Loaders</NavLink>
        </li>
        <li>
          <NavLink to="/actions">Actions</NavLink>
        </li>
        <li>
          <NavLink to="/metrics">Metrics</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
