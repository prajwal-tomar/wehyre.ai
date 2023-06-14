import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

const ResumeUploadSection = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleFileChange = (event) => {
    setResumeFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (resumeFile) {
      try {
        const formData = new FormData();
        formData.append("file", resumeFile);

        setUploadStatus("uploading"); // Set upload status to "uploading"

        const response = await axios.post(
          "http://localhost:5000/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setUploadStatus("success");
        console.log("File uploaded successfully");
        console.log("Response:", response.data);
      } catch (error) {
        setUploadStatus("error");
        console.error("Error uploading file:", error);
      }
    } else {
      setUploadStatus("no-file");
      console.log("No file selected");
    }
  };

  return (
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
            <Form onSubmit={handleSubmit} className="d-flex flex-column ">
              <Form.Group controlId="resumeUpload">
                <Form.Label>Upload CV</Form.Label>
                <Form.Control
                  type="file"
                  label="Choose File"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />
              </Form.Group>
              <Button variant="success" type="submit" className="mt-3">
                Submit Resume
              </Button>
            </Form>

            {uploadStatus === "no-file" && (
              <Alert variant="danger" className="mt-3">
                No file selected. Please choose a file to upload.
              </Alert>
            )}

            {uploadStatus === "error" && (
              <Alert variant="danger" className="mt-3">
                Error uploading file. Please try again later.
              </Alert>
            )}

            {uploadStatus === "uploading" && (
              <Alert variant="info" className="mt-3">
                File uploading...
              </Alert>
            )}

            {uploadStatus === "success" && (
              <Alert variant="success" className="mt-3">
                Resume uploaded successfully.
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ResumeUploadSection;