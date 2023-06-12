import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ResumeUploadSection = () => {
  const [resumeFile, setResumeFile] = useState(null);

  const handleFileChange = (event) => {
    setResumeFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle resume file submission here
    console.log("Resume file:", resumeFile);
  };

  return (
    <section className="cvupload py-5" id="cvupload">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center text-white mb-4">
              Take the First Step towards Your Dream Job
            </h2>
            <h5 className="text-center text-white mb-4">
              Upload Your Resume and Stand Out to Employers
            </h5>
            <Form onSubmit={handleSubmit} className='d-flex flex-column '>
              <Form.Group controlId="resumeUpload">
                <Form.Label>Upload CV</Form.Label>
                <Form.Control
                  type="file"
                  id="resumeFile"
                  label="Choose File"
                  onChange={handleFileChange}
                  custom
                  accept=".pdf,.doc,.docx"
                />
              </Form.Group>
              <Button variant="success" type="submit" className="mt-3">
                Submit Resume
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ResumeUploadSection;
