import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import PortofolioCard from './portofolio-card'

const Portofolio = (props) => {
  return (
    <>
      <div
        className={`portofolio-portofolio section-container ${props.rootClassName} `}
      >
        <div className="portofolio-max-width max-content-container">
          <div className="portofolio-text-container">
            <span className="portofolio-text">{props.text}</span>
            <h2 className="portofolio-text01 Heading2">
              <span>Explore our portfolio</span>
            </h2>
            <span className="portofolio-text03">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </span>
            </span>
            <Link href="/portfolio">
              <a className="portofolio-link button-secondary button-lg button">
                {props.primary}
              </a>
            </Link>
          </div>
          <div className="portofolio-tab-selector-header">
            <span className="portofolio-text07 tab-selector-btn">
              {props.text1}
            </span>
            <span className="portofolio-text08 tab-selector-btn">
              {props.text2}
            </span>
            <span className="portofolio-text09 tab-selector-btn">
              {props.text3}
            </span>
            <span className="portofolio-text10 tab-selector-btn">
              {props.text4}
            </span>
            <span className="portofolio-text11 tab-selector-btn">
              {props.text5}
            </span>
            <span className="tab-selector-btn">{props.text6}</span>
          </div>
          <div className="portofolio-tab-selector-cards-container">
            <Link href="/project">
              <a>
                <PortofolioCard
                  image_src="/playground_assets/unsplash_qj15unotnh0-400h.png"
                  rootClassName="portofolio-card-root-class-name"
                  className="portofolio-component"
                ></PortofolioCard>
              </a>
            </Link>
            <Link href="/project">
              <a>
                <PortofolioCard
                  image_src="/playground_assets/unsplash_wwqrpsnbpq4-400h.png"
                  project_title="A brand-new advertising idea"
                  rootClassName="portofolio-card-root-class-name5"
                  className="portofolio-component1"
                ></PortofolioCard>
              </a>
            </Link>
            <Link href="/project">
              <a>
                <PortofolioCard
                  image_src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxjb2NhJTIwY29sYXxlbnwwfHx8fDE2NDY5MjYyNTM&amp;ixlib=rb-1.2.1&amp;h=400"
                  project_title="Coca-Cola Summer Concept Campaign - 2021"
                  rootClassName="portofolio-card-root-class-name4"
                  className="portofolio-component2"
                ></PortofolioCard>
              </a>
            </Link>
            <Link href="/project">
              <a>
                <PortofolioCard
                  image_src="https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG51dGVsbGF8ZW58MHx8fHwxNjQ2OTI2MTky&amp;ixlib=rb-1.2.1&amp;h=400"
                  project_title="Ad Campaign - I love you as much as I love Nutella"
                  rootClassName="portofolio-card-root-class-name3"
                  className="portofolio-component3"
                ></PortofolioCard>
              </a>
            </Link>
            <Link href="/project">
              <a>
                <PortofolioCard
                  image_src="https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGNvY2ElMjBjb2xhfGVufDB8fHx8MTY0NjkyNjI1Mw&amp;ixlib=rb-1.2.1&amp;h=400"
                  project_title="Coca-Colla Next Door Campaign - conceptual"
                  rootClassName="portofolio-card-root-class-name2"
                  className="portofolio-component4"
                ></PortofolioCard>
              </a>
            </Link>
            <Link href="/project">
              <a>
                <PortofolioCard
                  image_src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHN0YXJidWNrc3xlbnwwfHx8fDE2NDY5MjYyMzc&amp;ixlib=rb-1.2.1&amp;h=400"
                  project_title="Starbucks secret is a smile when you get your latte"
                  rootClassName="portofolio-card-root-class-name1"
                  className="portofolio-component5"
                ></PortofolioCard>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .portofolio-portofolio {
            position: relative;
          }
          .portofolio-max-width {
            flex-direction: column;
          }
          .portofolio-text-container {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .portofolio-text {
            color: var(--dl-color-scheme-brown);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .portofolio-text01 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .portofolio-text03 {
            color: var(--dl-color-scheme-black80);
            text-align: center;
            line-height: 26px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .portofolio-link {
            text-decoration: none;
          }
          .portofolio-tab-selector-header {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-threeunits);
            flex-direction: row;
            justify-content: center;
          }
          .portofolio-text07 {
            margin-right: 30px;
          }
          .portofolio-text08 {
            margin-right: 30px;
          }
          .portofolio-text09 {
            margin-right: 30px;
          }
          .portofolio-text10 {
            margin-right: 30px;
          }
          .portofolio-text11 {
            margin-right: 30px;
          }
          .portofolio-tab-selector-cards-container {
            width: 100%;
            display: grid;
            grid-row-gap: 40px;
            grid-column-gap: 20px;
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: repeat(3, 1fr);
          }
          .portofolio-component {
            text-decoration: none;
          }
          .portofolio-component1 {
            text-decoration: none;
          }
          .portofolio-component2 {
            text-decoration: none;
          }
          .portofolio-component3 {
            text-decoration: none;
          }
          .portofolio-component4 {
            text-decoration: none;
          }
          .portofolio-component5 {
            text-decoration: none;
          }
          .portofolio-root-class-name {
            margin-top: var(--dl-space-space-threeunits);
          }
          @media (max-width: 991px) {
            .portofolio-tab-selector-cards-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 767px) {
            .portofolio-tab-selector-cards-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

Portofolio.defaultProps = {
  text6: 'Product Design',
  text3: 'Branding',
  text5: 'Packaging',
  text2: 'Social Media',
  text4: 'UI / UX',
  text: 'our work',
  text1: 'Advertising',
  primary: 'See all projects',
  rootClassName: '',
}

Portofolio.propTypes = {
  text6: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  primary: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Portofolio
