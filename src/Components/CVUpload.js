import React, { useState } from "react";
import { Container, Form, Button, Alert, InputGroup } from "react-bootstrap";

const CVUpload = () => {
  // State for file upload and feedback
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(false);

  // Handle file selection
  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Handle file upload
  const handleFileUpload = (e) => {
    e.preventDefault();

    // Simulate file upload process
    // Replace this with your actual upload logic

    if (selectedFile) {
      // Check file format and requirements
      const allowedFormats = ["pdf", "doc", "docx"];
      const fileFormat = selectedFile.name.split(".").pop().toLowerCase();

      if (allowedFormats.includes(fileFormat)) {
        // Upload success
        setUploadSuccess(true);
        setUploadError(false);
      } else {
        // Upload error: Invalid file format
        setUploadSuccess(false);
        setUploadError(true);
      }
    } else {
      // Upload error: No file selected
      setUploadSuccess(false);
      setUploadError(true);
    }

    // Clear the selected file
    setSelectedFile(null);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">CV Upload</h2>

      {/* Instructions */}
      <div className="mb-4">
        <h4>Instructions</h4>
        <p>
          Please upload your CV in one of the following supported formats: PDF,
          DOC, DOCX. <br /> Make sure your CV includes all the necessary
          information for potential employers to consider.
        </p>
      </div>

      {/* File Upload */}
      <div className="mb-4">
        <h4>File Upload</h4>
        <Form onSubmit={handleFileUpload}>
          <InputGroup size="sm" className="mb-3 w-50">
            <InputGroup.Text
              id="inputGroup-sizing-sm"
              onChange={handleFileSelect}
            >
              Upload CV
            </InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>

          <Button variant="primary" type="submit">
            Upload
          </Button>
        </Form>
      </div>

      {/* Feedback */}
      {uploadSuccess && (
        <Alert variant="success" className="mb-4">
          CV uploaded successfully!
        </Alert>
      )}

      {uploadError && (
        <Alert variant="danger" className="mb-4">
          There was an error uploading the CV. Please make sure you have
          selected a valid file in one of the supported formats.
        </Alert>
      )}
    </Container>
  );
};

export default CVUpload;
