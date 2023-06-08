import React from "react";
import { Container, Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div>
      <div className="bg-primary text-white text-center py-5">
        <Container>
          {isAuthenticated ? (
            <h1 className="display-4 mb-4">Welcome, {user.name} </h1>
          ) : (
            <h1 className="display-4 mb-4">
              Connecting Talented Job Seekers with the Right Employers
            </h1>
          )}

          <p className="lead mb-4">
            Welcome to wehyre.ai - your gateway to finding the perfect job
            opportunity. <br /> Find your dream job today!
          </p>
          <Button variant="light" size="lg" href="/job-listings">
            Find Jobs
          </Button>
        </Container>
      </div>

      <div className="bg-dark text-white py-2">
        <Container>
          <div className="flex justify-center gap-8 align-items-center">
            <h5 className="mb-2 text-center">Ready to take the next step?</h5>
            <Button
              variant="outline-light"
              size="lg"
              href="/cv-upload"
              style={{ borderColor: "green", color: "green" }}
            >
              Upload Your CV
            </Button>
          </div>
        </Container>
      </div>

      <Container className="my-5">
        <h2 className="text-center mb-4 font-semibold">
          Why Choose wehyre.ai?
        </h2>
        <div className="row flex justify-center gap-3">
          <div className="col-md-3 mb-4 border shadow px-2 py-5">
            <h3 className="text-center">AI-Powered Resume Scanning</h3>
            <p className="text-center">
              Our advanced AI technology scans and validates resumes, matching
              them against job descriptions to ensure the best fit.
            </p>
          </div>
          <div className="col-md-3 mb-4 border shadow mx-2 px-2 py-5">
            <h3 className="text-center">Personalized Job Matching</h3>
            <p className="text-center">
              Our platform uses intelligent algorithms to match job seekers with
              opportunities tailored to their skills, experience, and
              preferences.
            </p>
          </div>
          <div className="col-md-3 mb-4 border shadow px-2 py-5">
            <h3 className="text-center">Streamlined Recruitment Process</h3>
            <p className="text-center">
              Save time and effort with our efficient recruitment process,
              enabling employers to find the right candidates quickly and
              effectively.
            </p>
          </div>
        </div>
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4">Success Stories</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    "Thanks to wehyre.ai, I found my dream job within days.
                    Highly recommended for all the job seekers out there."
                  </p>
                  <footer className="blockquote-footer">
                    John Doe, Software Engineer
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    "I had a fantastic experience using wehyre.ai. Their
                    personalized job recommendations made my job search so much
                    smoother."
                  </p>
                  <footer className="blockquote-footer">
                    Jane Smith, Analyst
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <footer className="bg-light text-center py-4">
        <Container>
          <p>© 2023 wehyre.ai. All rights reserved.</p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="/terms-of-service">Terms of Service</a>
            </li>
            <li className="list-inline-item">
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
