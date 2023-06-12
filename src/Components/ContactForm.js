import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Footer from "./Footer";

const ContactForm = () => {
  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="text-center mb-4">Connect with Us</h1>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="my-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group controlId="formCompany">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your company name"
                  />
                </Form.Group>
                <Form.Group className="mt-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Enter your message"
                  />
                </Form.Group>
                <Button variant="primary" className="mt-4" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
        <Footer />
      </section>
      
    </>
  );
};

export default ContactForm;
