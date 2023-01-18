import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import FeatureCard2 from '../components/feature-card2'
import Footer from '../components/footer'

const Project = (props) => {
  return (
    <>
      <div className="project-container">
        <Head>
          <title>Project - Creative Agency Page</title>
          <meta property="og:title" content="Project - Creative Agency Page" />
        </Head>
        <Navigation rootClassName="navigation-root-class-name1"></Navigation>
        <div className="project-hero">
          <div className="project-container1">
            <h1 className="project-text">Magnificent things are very simple</h1>
            <span className="project-text1">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                  tortor.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <div className="project-btn-group">
              <button className="project-button button">Get Started</button>
              <button className="project-button1 button">Learn More</button>
            </div>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1500"
            className="project-image"
          />
        </div>
        <div className="project-features">
          <h1 className="project-text8">All these impressive features</h1>
          <div className="project-container2">
            <FeatureCard2 rootClassName="rootClassName"></FeatureCard2>
            <FeatureCard2 rootClassName="rootClassName3"></FeatureCard2>
            <FeatureCard2 rootClassName="rootClassName2"></FeatureCard2>
            <FeatureCard2 rootClassName="rootClassName1"></FeatureCard2>
          </div>
        </div>
        <ul className="list"></ul>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .project-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .project-hero {
            width: 100%;
            height: 595px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            min-width: 100%;
            min-height: 80vh;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .project-container1 {
            display: flex;
            margin-right: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
          }
          .project-text {
            font-size: 3rem;
            max-width: 450px;
          }
          .project-text1 {
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .project-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .project-button {
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .project-button:hover {
            color: var(--dl-color-scheme-white);
            background-color: var(--dl-color-scheme-black);
          }
          .project-button1 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-color: transparent;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .project-button1:hover {
            border-color: var(--dl-color-scheme-black);
          }
          .project-image {
            width: 400px;
            object-fit: cover;
          }
          .project-features {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            min-width: 100%;
            flex-direction: column;
          }
          .project-text8 {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .project-container2 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          @media (max-width: 991px) {
            .project-hero {
              flex-direction: column;
            }
            .project-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-twounits);
              padding-right: 0px;
            }
            .project-text {
              text-align: center;
            }
            .project-text1 {
              text-align: center;
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .project-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .project-text1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .project-image {
              width: 80%;
            }
            .project-features {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .project-container2 {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 479px) {
            .project-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .project-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .project-btn-group {
              flex-direction: column;
            }
            .project-button1 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .project-features {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Project
