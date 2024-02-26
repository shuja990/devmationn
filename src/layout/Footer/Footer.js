import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { FaFacebook, FaGithub, FaDribbble, FaTwitter } from 'react-icons/fa';

import {
  footerPrimaryPages,
  footerPages,
  footerTemplate,
} from '../../utils/data';
import Rating from '../../components/common/Rating';

const Footer = ({ footerLight, style, footerGradient }) => {
  return (
    <>
      <footer className='footer-section'>
        <div
          className={`footer-top ptb-120 ${footerLight ? 'footer-light' : 'bg-dark'} ${footerGradient ? 'bg-gradient' : ''
            }  text-white`}
          style={style}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
                <div className="footer-single-col">
                  <div className="footer-single-col mb-4">
                    {footerLight ? (
                      <Image
                        width={213}
                        height={46}
                        src="/logo.png"
                        alt="logo"
                        className="img-fluid logo-white"
                      // style={{width:"150"}}
                      />
                    ) : (
                      <Image
                        width={113}
                        height={36}
                        src="/company-logo.svg"
                        alt="logo"
                        className="img-fluid logo-color"
                      />
                    )}
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                  <div className="ratting-wrap mt-4">
                    <h6 className="mb-0">10/10 Overall rating</h6>
                    <Rating />
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                <div className="row">
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Get to know us</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerPrimaryPages.map((primaryPage, i) => (
                          <li key={i + 1}>
                            <Link href={primaryPage.href}>
                              <a className="text-decoration-none">
                                {' '}
                                {primaryPage.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Services</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerPages.map((page, i) => (
                          <li key={i + 1}>
                            <Link href={page.href}>
                              <a className="text-decoration-none">
                                {' '}
                                {page.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                    <div className="footer-single-col">
                      <h3>Contact us</h3>
                      <ul className="list-unstyled footer-nav-list mb-lg-0">
                        {footerTemplate.map((template, i) => (
                          <li key={i + 1}>
                            <Link href={template.href}>
                              <a className="text-decoration-none">
                                {' '}
                                {template.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div
          className={`footer-bottom ${footerLight ? 'footer-light' : 'bg-dark'
            } ${footerGradient ? 'bg-gradient' : ''} text-white py-4`}
        >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-7 col-lg-7">
                <div className="copyright-text">
                  <p className="mb-lg-0 mb-md-0">
                    &copy; 2022 DevMations Rights Reserved.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="footer-single-col text-start text-lg-end text-md-end">
                  <ul className="list-unstyled list-inline footer-social-list mb-0">
                    <li className="list-inline-item">
                      <Link href="#">
                        <a>
                          <FaFacebook />
                        </a>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <a>
                          <FaTwitter />
                        </a>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <a>
                          <FaDribbble />
                        </a>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <a>
                          <FaGithub />
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
