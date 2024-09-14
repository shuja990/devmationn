import React from "react";

const PortfolioCard = ({ title, description, image, link }) => {
  return (
    <div className="portfolio-card-home">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3 className="card-title text-start">{title}</h3>
        <p className="card-description text-start">{description}</p>
        <a
          href={link}
          className="btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore 
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
