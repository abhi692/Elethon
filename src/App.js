import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Schedule from "./pages/Schedule";
import Registration from './pages/Registration';
import './App.css';
import React, { Component }  from 'react';

function App() {
  return (
    <Router>
      <div className="App" style ={ { backgroundImage: "url('background for elethon.png')" } }>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Registration/>}/>
          <Route path="/schedule" element={<Schedule/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
