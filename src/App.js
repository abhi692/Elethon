import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Schedule from "./pages/Schedule";
import Registration from './pages/Registration';
import './App.css';
import React from 'react';
import Login from "./pages/Login";
import Date from "./pages/Date";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/date" element={<Date/>}/>
          <Route path="/register" element={<Registration/>}/>
          <Route path="/blog" element={<Schedule/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
