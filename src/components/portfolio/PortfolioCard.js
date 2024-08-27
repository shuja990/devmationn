import React from "react";

const PortfolioCard = ({ title, description, image, link }) => {
  return (
    <div className="portfolio-card-home">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a
          href={link}
          className="card-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
