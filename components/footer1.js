import React from 'react'

import PropTypes from 'prop-types'

const Footer1 = (props) => {
  return (
    <>
      <div className="footer1-footer section-container">
        <div className="max-content-container">
          <div className="footer1-top-part">
            <div className="footer1-links-container">
              <div className="footer1-product-container">
                <span className="footer1-text">{props.text1}</span>
                <span className="footer1-text01">{props.text2}</span>
                <span className="footer1-text02">{props.text3}</span>
                <span>{props.text4}</span>
              </div>
              <div className="footer1-navigate-container">
                <span className="footer1-text04">{props.text5}</span>
                <span className="footer1-text05">{props.text6}</span>
                <span className="footer1-text06">{props.text7}</span>
                <span>{props.text8}</span>
              </div>
              <div className="footer1-contact-container">
                <span className="footer1-text08">{props.text9}</span>
                <span className="footer1-text09">
                  <span>2157 Village View</span>
                  <br></br>
                  <span>
                    Drive, Old Fort
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Myers Florida
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>33901</span>
                </span>
              </div>
            </div>
            <div className="footer1-subscribe-container">
              <span className="footer1-text17">{props.text}</span>
              <input
                type="text"
                placeholder={props.textinput_placeholder}
                className="footer1-textinput input"
              />
              <button className="button-primary button">{props.button}</button>
            </div>
          </div>
        </div>
        <div className="footer1-separator"></div>
        <footer className="footer1-max-width1 max-content-container">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="footer1-image"
          />
          <span className="footer1-text18">
            <span>
              All rights recived @
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="footer1-text20">
              aesthetics
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              | Designed by
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="footer1-text22">teleporhq.io</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </footer>
      </div>
      <style jsx>
        {`
          .footer1-footer {
            position: relative;
          }
          .footer1-top-part {
            width: 100%;
            display: flex;
            align-items: stretch;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer1-links-container {
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer1-product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer1-text {
            color: var(--dl-color-scheme-brown);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer1-text01 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer1-text02 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer1-navigate-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer1-text04 {
            color: var(--dl-color-scheme-brown);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer1-text05 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer1-text06 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer1-contact-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer1-text08 {
            color: var(--dl-color-scheme-brown);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer1-text09 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .footer1-subscribe-container {
            flex: 0 0 auto;
            width: 35%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer1-text17 {
            color: var(--dl-color-scheme-brown);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .footer1-textinput {
            outline: none;
            align-self: stretch;
            padding-top: 4px;
            border-color: rgba(0, 0, 0, 0.1);
            padding-left: 0px;
            border-radius: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            padding-bottom: 4px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .footer1-separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: #d9d9d9;
          }
          .footer1-max-width1 {
            flex-direction: row;
            justify-content: space-between;
          }
          .footer1-image {
            width: 100px;
            object-fit: cover;
          }
          .footer1-text18 {
            align-self: center;
          }
          .footer1-text20 {
            font-weight: 700;
          }
          .footer1-text22 {
            font-weight: 700;
          }
          @media (max-width: 767px) {
            .footer1-top-part {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .footer1-links-container {
              width: 100%;
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              flex-direction: row;
            }
            .footer1-subscribe-container {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .footer1-top-part {
              align-items: center;
              flex-direction: column;
            }
            .footer1-contact-container {
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .footer1-max-width1 {
              flex-direction: column;
            }
            .footer1-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer1-text18 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer1.defaultProps = {
  text1: 'Product',
  textinput_placeholder: 'Enter your e-mail address',
  text: 'Subscribe to our newsletter',
  button: 'Subscribe',
  text9: 'Contact Us',
  image_alt: 'image',
  image_src: '/playground_assets/logo1-200h.png',
  text2: 'About',
  text8: 'Privacy Policy',
  text3: 'Portofolio',
  text6: 'Copyrights',
  text5: 'Navigate',
  text7: 'Sitemap',
  text4: 'Blog',
}

Footer1.propTypes = {
  text1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
  text9: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  text2: PropTypes.string,
  text8: PropTypes.string,
  text3: PropTypes.string,
  text6: PropTypes.string,
  text5: PropTypes.string,
  text7: PropTypes.string,
  text4: PropTypes.string,
}

export default Footer1
