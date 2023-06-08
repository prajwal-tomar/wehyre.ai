import React from "react";
import { Container, Form, Row, Col, Card, Button } from "react-bootstrap";

const JobListings = () => {
  const handleSearch = (e) => {
    // Handle search functionality
  };

  const handleFilter = (e) => {
    // Handle filter functionality
  };

  const handleApplyNow = () => {
    // Handle apply now functionality for a specific job
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Job Listings</h2>

      {/* Search and Filtering */}
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Control
              type="text"
              placeholder="Search jobs"
              onChange={handleSearch}
            />
          </Col>
          <Col>
            <Form.Control as="select" onChange={handleFilter}>
              <option value="">All Industries</option>
              <option value="IT">IT</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
              {/* Add more options for industries */}
            </Form.Control>
          </Col>
          {/* Add more filter options */}
        </Row>
      </Form>

      {/* Job Cards */}
      {/* Job Cards */}
      <Row>
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Software Engineer</Card.Title>
              <Card.Subtitle>Company A</Card.Subtitle>
              <Card.Text>Location: City X</Card.Text>
              <Card.Text>
                Seeking an experienced software engineer for a full-time
                position. Requirements include proficiency in programming
                languages.
              </Card.Text>
              <Button Button variant="success" onClick={() => handleApplyNow( )}>
                Apply Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Analyst</Card.Title>
              <Card.Subtitle>Company B</Card.Subtitle>
              <Card.Text>Location: City Y</Card.Text>
              <Card.Text>
                We are hiring an analyst with strong analytical and
                problem-solving skills. Candidates should have experience in
                data analysis and reporting.
              </Card.Text>
              <Button Button variant="success" onClick={() => handleApplyNow( )}>
                Apply Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Digital Marketer</Card.Title>
              <Card.Subtitle>Company C</Card.Subtitle>
              <Card.Text>Location: City Z</Card.Text>
              <Card.Text>
                Looking for a skilled digital marketer to drive online marketing
                campaigns. Proficiency in SEO, social media marketing, and
                content creation is required.
              </Card.Text>
              <Button Button variant="success" onClick={() => handleApplyNow( )}>
                Apply Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Assistant Manager</Card.Title>
              <Card.Subtitle>Company D</Card.Subtitle>
              <Card.Text>Location: City W</Card.Text>
              <Card.Text>
                We are seeking an assistant manager to support our operations.
                Strong organizational and leadership skills are required.
              </Card.Text>
              <Button Button variant="success" onClick={() => handleApplyNow( )}>
                Apply Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Data Scientist</Card.Title>
              <Card.Subtitle>Company E</Card.Subtitle>
              <Card.Text>Location: City V</Card.Text>
              <Card.Text>
                This is a description of the job role X. It includes details
                about the responsibilities, qualifications, and any specific
                requirements for the position.
              </Card.Text>
              <Button Button variant="success" onClick={() => handleApplyNow( )}>
                Apply Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Tech Support</Card.Title>
              <Card.Subtitle>Company E</Card.Subtitle>
              <Card.Text>Location: City V</Card.Text>
              <Card.Text>
                This is a description of the job role X. It includes details
                about the responsibilities, qualifications, and any specific
                requirements for the position.
              </Card.Text>
              <Button Button variant="success" onClick={() => handleApplyNow( )}>
                Apply Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default JobListings;
