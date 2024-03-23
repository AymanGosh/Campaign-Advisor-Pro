// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; // Import the Navbar component
import Sidebar from './Sidebar';
import LoginPage from './LoginPage'; // Import the LoginPage component

import LoaderList from './components/LoaderList';
import ActionList from './components/ActionList';
import MetricList from './components/MetricList';
import Home from './components/Home';

import './App.css'; // Import CSS for styling

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<Home/>} />
              <Route path="/loaders" element={<LoaderList />} />
              <Route path="/actions" element={<ActionList />} />
              <Route path="/metrics" element={<MetricList />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
