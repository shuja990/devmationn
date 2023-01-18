import React from 'react'

import PropTypes from 'prop-types'

const About = (props) => {
  return (
    <>
      <div className={`about-about section-container ${props.rootClassName} `}>
        <div className="about-max-width max-content-container">
          <div className="about-text-container">
            <span className="about-text">{props.text}</span>
            <h2 className="about-text01 Heading2">
              <span>
                We build brands with
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>purpose and impact</span>
            </h2>
            <span className="about-text05">{props.text1}</span>
            <div className="about-checklist">
              <div className="about-check-item">
                <svg viewBox="0 0 1024 1024" className="about-icon">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-text06">{props.text2}</span>
              </div>
              <div className="about-check-item1">
                <svg viewBox="0 0 1024 1024" className="about-icon02">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-text07">{props.text3}</span>
              </div>
              <div className="about-check-item2">
                <svg viewBox="0 0 1024 1024" className="about-icon04">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-text08">{props.text4}</span>
              </div>
              <div className="about-check-item3">
                <svg viewBox="0 0 1024 1024" className="about-icon06">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-text09">{props.text5}</span>
              </div>
              <div className="about-check-item4">
                <svg viewBox="0 0 1024 1024" className="about-icon08">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-text10">{props.text6}</span>
              </div>
              <div className="about-check-item5">
                <svg viewBox="0 0 1024 1024" className="about-icon10">
                  <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                </svg>
                <span className="about-text11">{props.text7}</span>
              </div>
            </div>
          </div>
          <div className="about-image-container">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="about-image"
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .about-about {
            position: relative;
            background-color: var(--dl-color-scheme-lightbrown);
          }
          .about-max-width {
            flex-direction: row;
            justify-content: space-between;
          }
          .about-text-container {
            flex: 1;
            width: 40%;
            display: flex;
            align-items: flex-start;
            margin-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .about-text {
            color: var(--dl-color-scheme-brown);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .about-text01 {
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .about-text05 {
            color: var(--dl-color-scheme-black80);
            line-height: 26px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .about-checklist {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .about-check-item {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-icon {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-text06 {
            font-style: normal;
            font-weight: 500;
          }
          .about-check-item1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-icon02 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-text07 {
            font-style: normal;
            font-weight: 500;
          }
          .about-check-item2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-icon04 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-text08 {
            font-style: normal;
            font-weight: 500;
          }
          .about-check-item3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-icon06 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-text09 {
            font-style: normal;
            font-weight: 500;
          }
          .about-check-item4 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: row;
          }
          .about-icon08 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-text10 {
            font-style: normal;
            font-weight: 500;
          }
          .about-check-item5 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .about-icon10 {
            fill: var(--dl-color-scheme-brown);
            width: 18px;
            height: 18px;
            margin-right: var(--dl-space-space-unit);
          }
          .about-text11 {
            font-style: normal;
            font-weight: 500;
          }
          .about-image {
            flex: 1;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .about-root-class-name {
            margin-top: var(--dl-space-space-threeunits);
          }
          @media (max-width: 991px) {
            .about-max-width {
              flex-direction: column;
            }
            .about-text-container {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .about-image-container {
              width: 100%;
            }
            .about-image {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

About.defaultProps = {
  text2: 'Quality services and support all time',
  text1:
    'We are a full-service digital creative agency with brick and mortar offices and plenty of in-house talent.',
  rootClassName: '',
  text6: 'Future-Proofing Projects',
  text5: 'Over 10 years in the business',
  text: 'about us',
  text3: 'Long-term strategy development',
  text4: 'FREE Brand Audit for startups',
  text7: 'Support in any implementation',
  image_alt: 'image',
  image_src: '/playground_assets/rectangle%20109-1000w.png',
}

About.propTypes = {
  text2: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text6: PropTypes.string,
  text5: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text7: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default About
