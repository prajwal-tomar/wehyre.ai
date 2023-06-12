import { Container, Row, Col, Button } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import "animate.css";
import WhyUsEmployers from "./WhyUsEmployers";

const EmployersHome = () => {
  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <div className="animate__animated animate__fadeIn">
                {/* <span className="tagline">Unlock Your Potential. Connect with Your Dream Job.</span> */}
                <h1>Your Gateway to Top Talent Acquisition and Growth</h1>
                <p>
                  In a competitive business landscape, securing top talent is
                  crucial for organizational success. Crafted to attract and
                  retain the best professionals, our platform unlocks the power
                  of top talent, empowering your organization to build a dynamic
                  workforce that drives innovation and achieves remarkable
                  results.
                </p>
                <Button
                  variant="success"
                  className="mt-3"
                  href="/signupform"
                >
                  Get Started
                </Button>
              </div>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <div className="animate__animated animate__zoomIn">
                <img src={headerImg} alt="Header Img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <WhyUsEmployers />
    </>
  );
};

export default EmployersHome;
