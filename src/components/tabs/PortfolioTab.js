import PortfolioCard from "@components/portfolio/PortfolioCard";
import Image from "next/image";
import React from "react";


const PortfolioTab = () => {
  const portfolioData = [
    {
      title: "E-Commerce Platform",
      description: "A full-fledged e-commerce solution with integrated payment gateways and user-friendly interfaces.",
      image: "/portfolio/portfolio1.png", // Replace with actual image URL
      link: "#",
    },
    {
      title: "Mobile Banking App",
      description: "A secure and responsive mobile banking app with real-time transaction tracking and notifications.",
      image: "/portfolio/portfolio1.png", // Replace with actual image URL
      link: "#",
    },
    {
      title: "AI-Powered Analytics",
      description: "An AI-based analytics tool that helps businesses derive actionable insights from their data.",
      image: "/portfolio/portfolio2.png", // Replace with actual image URL
      link: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "A dashboard for managing multiple social media accounts, scheduling posts, and tracking performance metrics.",
      image: "/portfolio/portfolio2.png", // Replace with actual image URL
      link: "#",
    },
  ];

  return (
    <section className="portfolio bg-dark ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              <h2>Our Portfolio</h2>
              <p>
                Credibly grow premier ideas rather than bricks-and-clicks
                strategic theme areas distributed for stand-alone web-readiness.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12">
            <div className="tab-button mb-5">
              <ul
                className="nav nav-pills d-flex justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-all-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-all"
                    type="button"
                    role="tab"
                    aria-controls="pills-all"
                    aria-selected="true"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-branding-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-branding"
                    type="button"
                    role="tab"
                    aria-controls="pills-branding"
                    aria-selected="false"
                  >
                    Branding
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-design-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-design"
                    type="button"
                    role="tab"
                    aria-controls="pills-design"
                    aria-selected="false"
                  >
                    Design
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-logo-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-logo"
                    type="button"
                    role="tab"
                    aria-controls="pills-logo"
                    aria-selected="false"
                  >
                    Logo
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-web-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-web"
                    type="button"
                    role="tab"
                    aria-controls="pills-web"
                    aria-selected="false"
                  >
                    Web
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="tab-content" id="pills-tabContent" >
            <div
              className="tab-pane fade show active"
              id="pills-all"
              role="tabpanel"
              aria-labelledby="pills-all-tab"
            >
              <div className="portfolio-listing-home">
                {portfolioData.map((project, id) => (
                  <PortfolioCard
                    key={id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                  />
                ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioTab;
