import React from 'react';
import {
  BsFillChatSquareTextFill,
  BsFillEnvelopeFill,
  BsTelephoneInbound,
} from 'react-icons/bs';

const ContactCard = () => {
  return (
    <section className="contact-promo ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsFillChatSquareTextFill />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Chat with us</h5>
                <p>
                  At Devmations, we're dedicated to transforming your business visions into reality. Our team of experts is available <strong>Monday to Friday</strong> from <strong>9 AM to 11 PM EST</strong> to discuss your needs, explore your ideas, and help you navigate the complexities of digital innovation.
                </p>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=923025133646&text=Hey%20Devmations%20Team%2C%0A%0AI%E2%80%99m%20ready%20to%20shake%20things%20up%20with%20a%20new%20project%20and%20I%20think%20you%E2%80%99re%20the%20right%20crew%20for%20the%20job.%20Let%E2%80%99s%20chat%20about%20what%20we%20can%20create%20together!"
                className="btn btn-primary mt-auto"
                target='_blank'
                rel='noopener noreferrer'
              >
                Chat with us
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsFillEnvelopeFill />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Email Us</h5>
                <p>
                  Prefer writing? Drop us an email at <strong>info@devmations.com</strong> any time. Expect a detailed reply within 24 hours as we love to hear more about your project needs and how we can assist.
                </p>
              </div>
              <a
                href="mailto:info@devmations.com"
                className="btn btn-primary mt-auto"
              >
                Email Us
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column h-100">
              <span className="fad fa-3x text-primary">
                <BsTelephoneInbound />
              </span>
              <div className="contact-promo-info mb-4">
                <h5>Give us a call</h5>
                <p>
                  Our knowledgeable representatives are here to provide tailored solutions. Connect with us <strong>Monday to Friday</strong> from <strong>9 AM to 11 PM EST.</strong> Let’s discuss how we can help build your future solutions.
                </p>
              </div>
              <a href="tel:+923025133646" className="btn btn-primary mt-auto"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id='get-started-with-us'></div>
    </section>
  );
};

export default ContactCard;
