import React from 'react'

import PropTypes from 'prop-types'

import ServicesCard from './services-card'

const Services = (props) => {
  return (
    <>
      <div
        className={`services-services section-container ${props.rootClassName} `}
      >
        <div className="services-max-width max-content-container">
          <div className="services-heading-container">
            <div className="services-text-container">
              <span className="services-text">{props.text}</span>
              <h2 className="Heading2">
                <span>
                  We provide a wide range of
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>creative solutions</span>
              </h2>
            </div>
            <div className="services-controls">
              <button className="control-btn">
                <svg viewBox="0 0 1024 1024" className="services-icon">
                  <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
                </svg>
                {props.button}
              </button>
              <button className="control-btn">
                <svg viewBox="0 0 1024 1024" className="services-icon2">
                  <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                </svg>
                {props.button1}
              </button>
            </div>
          </div>
          <div className="services-cards-container">
            <ServicesCard></ServicesCard>
            <ServicesCard
              text="Copy-writting"
              image_src="/playground_assets/file-document-200w.png"
            ></ServicesCard>
            <ServicesCard
              text="Product Design"
              image_src="/playground_assets/dice-5-200h.png"
            ></ServicesCard>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .services-services {
            display: flex;
            position: relative;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-color: var(--dl-color-scheme-lightbrown);
          }
          .services-max-width {
            flex-direction: column;
          }
          .services-heading-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .services-text-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .services-text {
            color: var(--dl-color-scheme-brown);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .services-controls {
            display: grid;
            grid-gap: 12px;
            grid-template-columns: 1fr 1fr;
          }
          .services-icon {
            width: 16px;
            height: 16px;
          }
          .services-icon2 {
            width: 16px;
            height: 16px;
          }
          .services-cards-container {
            width: 100%;
            display: flex;
            grid-gap: 20px;
          }
        `}
      </style>
    </>
  )
}

Services.defaultProps = {
  rootClassName: '',
  button: '',
  text: 'our services',
  button1: '',
}

Services.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  text: PropTypes.string,
  button1: PropTypes.string,
}

export default Services
