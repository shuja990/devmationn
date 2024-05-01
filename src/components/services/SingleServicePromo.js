import React from 'react';

const SingleServicePromo = ({ title, desc, card1, card2, card3, light }) => {
  return (
    <section className={`promo-section ptb-120 ${light ? "bg-light" : "bg-dark"}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-6">
            <div className="section-heading text-center">
              <h2>{title}</h2>
              <p>
                {desc}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 service-card-height">
            <div className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-4">
              <div className="promo-card-info">
                <h3 className="display-6 fw-medium mb-4">{card1.stat}</h3>
                <h2 className="h5">{card1.heading}</h2>
                <p className="mb-0">
                  {card1.subHeading}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 service-card-height">
            <div className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-4">
              <div className="promo-card-info">
                <h3 className="display-6 fw-medium mb-4">{card2.stat}</h3>
                <h2 className="h5">{card2.heading}</h2>
                <p className="mb-0">
                  {card2.subHeading}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 service-card-height">
            <div className="promo-card-wrap promo-border-hover border border-2 bg-white rounded-custom p-5 mb-4 mb-lg-0 mb-md-0">
              <div className="promo-card-info">
                <h3 className="display-6 fw-medium mb-4">{card3.stat}</h3>
                <h2 className="h5">{card3.heading}</h2>
                <p className="mb-0">
                  {card3.subHeading}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='get-started-with-us'></div>
    </section>
  );
};

export default SingleServicePromo;
