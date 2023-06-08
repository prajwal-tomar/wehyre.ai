import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const EmployersHome = () => {
  return (
    <div>
      <div className="bg-primary text-white text-center py-5">
        <Container>
          <h1 className="display-4 mb-4">
            Unlock Top Talent for Your Organization
          </h1>
          <p className="lead mb-4">
            Connect with the Best Candidates Using Our AI-powered Recruitment
            Platform
          </p>
          <Button
            variant="light
          "
            size="lg"
            href="/signup"
          >
            Get Started Now
          </Button>
        </Container>
      </div>

      <Container>
      <h2 className="text-center mt-5 mb-4 font-semibold">
          Why Choose wehyre.ai?
        </h2>
        <Row className="mt-5">
          <Col md={4}>
            <Card className="shadow border mb-4">
              <Card.Body>
                <Card.Title>AI-driven Candidate Matching</Card.Title>
                <Card.Text>
                  Our advanced AI algorithms analyze candidate profiles to find
                  the perfect fit for your company's requirements.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow border mb-4">
              <Card.Body>
                <Card.Title>Intelligent Resume Scanning</Card.Title>
                <Card.Text>
                  Save time and effort with our automated resume scanning
                  technology that highlights the most relevant skills and
                  qualifications.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow border mb-4">
              <Card.Body>
                <Card.Title>Extensive Candidate Database</Card.Title>
                <Card.Text>
                  Access a vast pool of qualified candidates and search for
                  specific skills, experience, and qualifications. We have a huge database of candidates.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={4}>
            <Card className="shadow border mb-4">
              <Card.Body>
                <Card.Title>Streamlined Recruitment Process</Card.Title>
                <Card.Text>
                  Simplify your hiring process with our intuitive platform,
                  allowing you to manage job postings, applications, and
                  candidate communication.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow border mb-4">
              <Card.Body>
                <Card.Title>Customized Job Posting Options</Card.Title>
                <Card.Text>
                  Tailor your job listings with specific requirements, company
                  information, and branding to attract the right talent.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow border mb-4">
              <Card.Body>
                <Card.Title>Save Time and Find the Best Talent</Card.Title>
                <Card.Text>
                  Our innovative AI-powered platform revolutionizes the
                  recruitment process, delivering exceptional results and
                  helping you find the right candidates quickly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col md={6} className="mx-auto text-center">
            <h3 className="mb-4">Testimonials</h3>
            <Card className="shadow border mb-4">
              <Card.Body>
                <Card.Text>
                  "Working with wehyre.ai has been a game-changer for our
                  recruitment process. The AI-powered candidate matching helped
                  us find exceptional talent quickly and efficiently."
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  John Doe, HR Manager at XYZ Company
                </Card.Subtitle>
              </Card.Body>
            </Card>
            <Card className="shadow border">
              <Card.Body>
                <Card.Text>
                  "wehyre.ai provides an excellent platform for employers. The
                  resume scanning feature saved us countless hours and ensured
                  we considered the most relevant candidates for our positions."
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                  Jane Smith, HR Director at ABC Corporation
                </Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="text-center mb-4">
          <Col>
            <Button variant="dark" size="lg" href="/employer-signup">
              Employer's Portal
            </Button>
          </Col>
        </Row>
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

export default EmployersHome;
