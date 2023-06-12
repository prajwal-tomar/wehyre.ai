import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import { Carousel } from "react-bootstrap";

const WhyUsEmployers = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="text-capitalize">Why Choose wehyre.ai?</h2>
              <p>
                Choose wehyre.ai for a seamless and effective job search and
                recruitment experience.With personalized job matching, we take
                into account your skills, experience, and preferences to connect
                you with opportunities that align with your career goals.
              </p>
              <Carousel
                interval={null}
                nextLabel={<img src={arrow2} alt="Right Arrow" />}
                prevLabel={<img src={arrow1} alt="Left Arrow" />}
                slide={false}
              >
                <Carousel.Item>
                  <div className="row justify-content-center gap-3">
                    <div className="col-md-3 mb-4 border shadow px-2 py-5">
                      <h3 className="text-center">
                        AI-driven Candidate Matching
                      </h3>
                      <p className="text-center">
                        Our advanced AI algorithms analyze candidate profiles to
                        find the perfect fit for your company's requirements.
                      </p>
                    </div>
                    <div className="col-md-3 mb-4 border shadow mx-2 px-2 py-5">
                      <h3 className="text-center">
                        Intelligent Resume Scanning
                      </h3>
                      <p className="text-center">
                        Save time and effort with our automated resume scanning
                        technology that highlights the most relevant skills and
                        qualifications.
                      </p>
                    </div>
                    <div className="col-md-3 mb-4 border shadow px-2 py-5">
                      <h3 className="text-center">
                        Extensive Candidate Database
                      </h3>
                      <p className="text-center">
                        Access a vast pool of qualified candidates and search
                        for specific skills, experience, and qualifications. We
                        have a huge database of candidates.
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="row justify-content-center gap-3">
                    <div className="col-md-3 mb-4 border shadow px-2 py-5">
                      <h3 className="text-center">
                        Streamlined Recruitment Process
                      </h3>
                      <p className="text-center">
                        Simplify your hiring process with our intuitive
                        platform, allowing you to manage job postings,
                        applications, and candidate communication.
                      </p>
                    </div>
                    <div className="col-md-3 mb-4 border shadow mx-2 px-2 py-5">
                      <h3 className="text-center">
                        Customized Job Posting Options
                      </h3>
                      <p className="text-center">
                        Tailor your job listings with specific requirements,
                        company information, and branding to attract the right
                        talent.
                      </p>
                    </div>
                    <div className="col-md-3 mb-4 border shadow px-2 py-5">
                      <h3 className="text-center">
                        Save Time and Find the Best Talent
                      </h3>
                      <p className="text-center">
                        Our innovative AI-powered platform revolutionizes the
                        recruitment process, delivering exceptional results and
                        helping you find the right candidates.
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsEmployers;
