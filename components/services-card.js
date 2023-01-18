import React from 'react'

import PropTypes from 'prop-types'

const ServicesCard = (props) => {
  return (
    <>
      <div className="services-card">
        <div className="services-card-container">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="services-card-image"
          />
        </div>
        <span className="services-card-text">{props.text}</span>
        <span className="services-card-text1">{props.text1}</span>
        <span className="services-card-text2">{props.text2}</span>
      </div>
      <style jsx>
        {`
          .services-card-container {
            width: 56px;
            height: 56px;
            display: flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius4);
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: center;
            background-color: rgba(182, 71, 47, 0.1);
          }
          .services-card-image {
            width: 24px;
            height: 24px;
            object-fit: contain;
          }
          .services-card-text {
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .services-card-text1 {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .services-card-text2 {
            cursor: pointer;
            text-decoration: underline;
          }
        `}
      </style>
    </>
  )
}

ServicesCard.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/website-200h.png',
  text: 'Website design',
  text1:
    'Create your ubest unique App development, crafted for your business needs.',
  text2: 'Learn more',
}

ServicesCard.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
}

export default ServicesCard
