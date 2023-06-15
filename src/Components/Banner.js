import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../assets/img/ai.png";
import "animate.css";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div className="animate__animated animate__fadeIn">
              <span className="tagline">
                Unlock Your Potential: Find Your Dream Job Today!
              </span>
              <h1 className="text-white">
                Linking Talented Job Seekers with the Right Employers
              </h1>
              <p>
                Welcome to wehyre.ai - your gateway to finding the perfect job
                opportunity. <br /> Find your dream job today!
              </p>
              <Button variant="primary" className="mt-3" href="#cvupload">
                Upload CV
              </Button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5} className="d-none d-md-block">
            <div className="animate__animated animate__zoomIn">
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
      <style>
        {`
        @media screen and (max-width: 480px) {
          .h1 {
            font-size: 18px;
          }
        }
        `}
      </style>
    </section>
  );
};

export default Banner;
