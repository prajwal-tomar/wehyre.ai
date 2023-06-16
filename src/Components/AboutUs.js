import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <section className="aboutus">
      <Container className="my-0">
        <h1 className="text-center mb-4 text-white">About Us</h1>

        {/* Company Overview */}
        <div className="mb-4">
          <h2 className="text-white">Company Overview</h2>
          <p>
            At wehyre.ai, we are dedicated to connecting talented job seekers
            with the right employers. Our mission is to streamline the
            recruitment process by leveraging AI-powered resume scanning and
            personalized job matching algorithms. We believe in providing a
            platform that bridges the gap between job seekers and employers,
            making the hiring process efficient and effective.
          </p>
        </div>

        {/* Team and Expertise */}
        <div className="mb-4">
          <h2 className="text-white">Team and Expertise</h2>
          <p>
            Our team at wehyre.ai consists of industry experts with extensive
            experience in AI-powered recruitment and talent acquisition. We have
            built a strong foundation of knowledge and expertise in leveraging
            artificial intelligence to revolutionize the hiring process. With
            our deep understanding of the industry and cutting-edge technology,
            we are committed to providing innovative solutions that meet the
            evolving needs of both job seekers and employers.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-white">Contact Information</h2>
          <Row className="mb-3">
            <Col>Email:</Col>
            <Col>
              <a href="mailto:wehyre.ai@gmail.com">wehyre.ai@gmail.com</a>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>Phone:</Col>
            <Col>+91 9694204207</Col>
          </Row>
          <Row>
            <Col>Social Media:</Col>
            <Col>
              <a href="https://www.linkedin.com/company/wehyre-ai" target="_blank">LinkedIn</a>{" "}
              | <a href="https://www.facebook.com/wehyreai" target="_blank">Facebook</a> |{" "}
              <a href="https://www.instagram.com/wehyre.ai" target="_blank">Instagram</a>
            </Col>
          </Row>
        </div>
      </Container>
      <footer className="footer mt-auto py-3">
        <Container>
          <Row>
            <Col className="text-center">
              <p>&copy; 2023 wehyre.ai. All rights reserved.</p>
            </Col>
          </Row>
        </Container>

        <style jsx>{`
          .footer {
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: black;
          }
        `}</style>
      </footer>
    </section>
  );
};

export default AboutUs;
