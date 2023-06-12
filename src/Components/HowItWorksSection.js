import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const HowItWorksSection = () => {
  return (
    <section className="cvupload py-5">
      <Container>
        <h2 className="text-center mb-5">How Our AI-Driven Job Matching Platform Works</h2>
        <Row className="justify-content-center">
          <Col md={6} lg={3} className="text-center mb-5">
            <Card className="shadow border">
              <Card.Body>
                <div className="step">
                  <div className="step-number">1</div>
                  <h4>Upload Your <br /> Resume</h4>
                  <p>Easily upload your resume through our secure and user-friendly system</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="text-center mb-5">
            <Card className="shadow border">
              <Card.Body>
                <div className="step">
                  <div className="step-number">2</div>
                  <h4>Skill and Preference Analysis</h4>
                  <p>Our AI technology analyzes your resume to find the best-fit opportunities.</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="text-center mb-5">
            <Card className="shadow border">
              <Card.Body>
                <div className="step">
                  <div className="step-number">3</div>
                  <h4>Personalized Job Recommendations</h4>
                  <p>Receive tailored job recommendations based on your skills and career goals.</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={3} className="text-center mb-5">
            <Card className="shadow border">
              <Card.Body>
                <div className="step">
                  <div className="step-number">4</div>
                  <h4>Connect with Employers</h4>
                  <p>Engage with potential employers, schedule interviews, and land your dream job.</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
