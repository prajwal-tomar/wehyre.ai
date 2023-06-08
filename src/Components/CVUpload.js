import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";

const CVUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        await axios.post("http://127.0.0.1:5000/upload_resume", formData);
        console.log("File uploaded successfully!");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">CV Upload</h2>

      <div className="mb-4">
        <h4>Instructions</h4>
        <p>
          Please upload your CV in one of the following supported formats: PDF,
          DOC, DOCX. <br /> Make sure your CV includes all the necessary
          information for potential employers to consider.
        </p>
      </div>

      <div className="mb-4">
        <h4>File Upload</h4>
        <Form onSubmit={handleFileUpload}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload CV</Form.Label>
            <Form.Control type="file" onChange={handleFileSelect} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Upload
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default CVUpload;
