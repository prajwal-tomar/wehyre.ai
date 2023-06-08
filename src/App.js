import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomNavbar from './Components/CustomNavbar';
import Home from './Components/Home';
import JobListings from './Components/JobListings';
import CVUpload from './Components/CVUpload';
import EmployerPortal from './Components/EmployerPortal';
import AboutUs from './Components/AboutUs';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job-listings" element={<JobListings />} />
        <Route path="/cv-upload" element={<CVUpload />} />
        <Route path="/employer-portal" element={<EmployerPortal />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
