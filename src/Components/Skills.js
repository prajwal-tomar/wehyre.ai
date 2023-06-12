import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2 className="text-capitalize">Why Choose Our AI-Driven Job Matching Platform?</h2>
              <p>
                Choose wehyre.ai for a seamless and effective job search and
                recruitment experience.With personalized job matching, we take
                into account your skills, experience, and preferences to connect
                you with opportunities that align with your career goals.
              </p>
              <div className="row justify-content-center gap-3">
                <div className="col-md-3 mb-4 border shadow px-2 py-5">
                  <h3 className="text-center">AI-Powered Resume Scanning</h3>
                  <p className="text-center">
                    Our advanced AI technology scans and validates resumes,
                    matching them against job descriptions to ensure the best
                    fit.
                  </p>
                </div>
                <div className="col-md-3 mb-4 border shadow mx-2 px-2 py-5">
                  <h3 className="text-center">Personalized Job Matching</h3>
                  <p className="text-center">
                    Our platform uses intelligent algorithms to match job
                    seekers with opportunities tailored to their skills,
                    experience, and preferences.
                  </p>
                </div>
                <div className="col-md-3 mb-4 border shadow px-2 py-5">
                  <h3 className="text-center">
                    Streamlined Recruitment Process
                  </h3>
                  <p className="text-center">
                    Save time and effort with our efficient recruitment process,
                    enabling employers to find the right candidates quickly and
                    effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};
