import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar";
import JobListings from "./Components/JobListings";
import CVUpload from "./Components/CVUpload";
import EmployerPortal from "./Components/EmployerPortal";
import AboutUs from "./Components/AboutUs";
import EmployersHome from "./Components/EmployersHome";
import ContactForm from "./Components/ContactForm";
import Banner from "./Components/Banner";
import { Skills } from "./Components/Skills";
import Footer from "./Components/Footer";
import HowItWorksSection from "./Components/HowItWorksSection";
import Testimonials from "./Components/Testimonials";

import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Skills />
              {/* <CVUpload /> */}
              <ContactForm />
              <Testimonials />
              <HowItWorksSection />
              {/* <AboutUs /> */}
              <Footer />
            </>
          }
        />
        <Route path="/job-listings" element={<JobListings />} />
        <Route path="/employers-home" element={<EmployersHome />} />
        <Route path="/cv-upload" element={<CVUpload />} />
        <Route path="/employer-portal" element={<EmployerPortal />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/signupform" element={<ContactForm />} />
      </Routes>
    </Router>
  );
};

export default App;
