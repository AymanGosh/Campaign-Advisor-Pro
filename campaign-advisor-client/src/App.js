// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import LoaderList from './components/LoaderList';
import ActionList from './components/ActionList';
import MetricList from './components/MetricList';
import './App.css'; // Import CSS for styling

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main">
          <Routes>
            <Route path="/loaders" element={<LoaderList />} />
            <Route path="/actions" element={<ActionList />} />
            <Route path="/metrics" element={<MetricList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
