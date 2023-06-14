import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import ProgressBar from "react-bootstrap/ProgressBar";

const ContactForm = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [showUploadingAlert, setShowUploadingAlert] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleFileChange = (event) => {
    setResumeFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const name = form.elements["formName"].value;
    const email = form.elements["formEmail"].value;
    const location = form.elements["formCompany"].value;

    formData.append("name", name);
    formData.append("email", email);
    formData.append("location", location);
    formData.append("resume", resumeFile);

    try {
      console.log("Uploading...");
      setShowUploadingAlert(true);

      const response = await fetch("http://127.0.0.1:5000/add_entry", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Form submission successful", data);
        form.reset();
        setShowUploadingAlert(false);
        setResumeFile(null);
        setShowSuccessAlert(true);
        setShowErrorAlert(false);
      } else {
        console.log("Form submission failed");
        setShowUploadingAlert(false);
        setShowSuccessAlert(false);
        setShowErrorAlert(true);
      }
    } catch (error) {
      console.log("Error occurred while submitting the form", error);
      setShowUploadingAlert(false);
      setShowSuccessAlert(false);
      setShowErrorAlert(true);
    }
  };

  return (
    <>
      <section className="cvupload py-5" id="cvupload">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h2 className="text-center mb-4">
                Take the First Step towards Your Dream Job
              </h2>
              <h5 className="text-center mb-4">
                Upload Your Resume and Stand Out to Employers
              </h5>
              {showSuccessAlert && (
                <Alert
                  variant="success"
                  onClose={() => setShowSuccessAlert(false)}
                  dismissible
                >
                  Form submitted successfully!
                </Alert>
              )}
              {showErrorAlert && (
                <Alert
                  variant="danger"
                  onClose={() => setShowErrorAlert(false)}
                  dismissible
                >
                  Form submission failed! Please try again.
                </Alert>
              )}
              {showUploadingAlert && (
                <Alert
                  variant="primary"
                  onClose={() => setShowUploadingAlert(false)}
                  dismissible
                >
                  Uploading your details to the cloud...
                </Alert>
              )}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName">
                  <Form.Label>
                    Name <span className="required-field">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>
                <Form.Group className="my-3" controlId="formEmail">
                  <Form.Label>
                    Email address <span className="required-field">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formCompany">
                  <Form.Label>
                    Preferred location <span className="required-field">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your preferred location"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="resumeUpload" className="mt-2">
                  <Form.Label>
                    Upload CV <span className="required-field">*</span>
                  </Form.Label>
                  <Form.Control
                    type="file"
                    label="Choose File"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </Form.Group>
                {!showUploadingAlert ? (
                  <Button variant="success" className="mt-4" type="submit">
                    Submit
                  </Button>
                ) : (
                  <ProgressBar
                    className="my-2"
                    label={"Uploading..."}
                    animated
                    now={100}
                  />
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ContactForm;
