import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <section className="banner" id="home">
      <Container className="my-0">
        <h1 className="text-center mb-4">About Us</h1>

        {/* Company Overview */}
        <div className="mb-4">
          <h4>Company Overview</h4>
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
          <h4>Team and Expertise</h4>
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
          <h4>Contact Information</h4>
          <Row className="mb-3">
            <Col>Email:</Col>
            <Col>
              <a href="mailto:info@wehyre.ai">info@wehyre.ai</a>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>Phone:</Col>
            <Col>+1 123-456-7890</Col>
          </Row>
          <Row>
            <Col>Social Media:</Col>
            <Col>
              <a href="https://www.linkedin.com/company/wehyre-ai">LinkedIn</a>{" "}
              | <a href="https://twitter.com/wehyre_ai">Twitter</a> |{" "}
              <a href="https://www.instagram.com/wehyre_ai">Instagram</a>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
