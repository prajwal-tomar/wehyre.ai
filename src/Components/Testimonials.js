import { Container, Row, Col, Card } from 'react-bootstrap';
import './Testimonials.css'; 

const Testimonials = () => {
  return (
    <section className="testimonials">
      <Container>
        <h1 className="text-center text-white text-uppercase mb-5">What Our Users Say</h1>
        <Row className="justify-content-center">
          <Col lg={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    "wehyre has been a game-changer for my job search. The personalized job matching feature helped me find the perfect opportunity that aligned with my skills and experience."
                  </p>
                  <footer className="blockquote-footer">
                    Rishab panth, Software Engineer
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    "Thanks to wehyre, I found my dream job within weeks. The platform's personalized job matching feature ensured my application stood out from the competition."
                  </p>
                  <footer className="blockquote-footer">
                    Manya Gupta, Marketing Manager
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="testimonial-card">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    "I highly recommend wehyre to job seekers. The streamlined recruitment process saved me time and effort, allowing me to focus on finding the right opportunities."
                  </p>
                  <footer className="blockquote-footer">
                    Arjun Goyal, Analyst
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
