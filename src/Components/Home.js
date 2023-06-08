import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Card bg="primary" text="white" className="text-center">
        <Card.Body>
          <Card.Title className="display-4">
            Connecting Talented Job Seekers with the Right Employers
          </Card.Title>
          <Card.Text className="lead">
            Welcome to wehyre.ai - your gateway to finding the perfect job
            opportunity.
          </Card.Text>
          <Button variant="light" size="lg" href="/job-listings">
            Find Jobs
          </Button>
        </Card.Body>
      </Card>

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
                    "wehyre.ai made the recruitment process seamless and
                    efficient. The AI resume scanning feature really helped us"
                  </p>
                  <footer className="blockquote-footer">
                    Jane Smith, HR Manager
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
