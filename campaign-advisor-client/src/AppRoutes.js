// Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoaderList from "./components/LoaderList";
import ActionList from "./components/ActionList";
import MetricList from "./components/MetricList";
import Home from "./components/Home";

import Navbar from "./Navbar"; // Import the Navbar component
import Sidebar from "./Sidebar";
import LoginPage from "./LoginPage";

function AppRoutes() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/loaders" element={<LoaderList />} />
            <Route path="/actions" element={<ActionList />} />
            <Route path="/metrics" element={<MetricList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default AppRoutes;
