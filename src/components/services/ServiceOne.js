import React from 'react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import {
  HiOutlineCog,
} from 'react-icons/hi';
import SectionTitle from '../common/SectionTitle';
import Image from 'next/image';

const ServiceOne = ({ bgDark }) => {
  return (
    <section
      className={`feature-section ptb-120 ${bgDark ? 'bg-dark' : 'bg-light'}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 justify-content-center">
            {bgDark ? (
              <SectionTitle
                subtitle="Services"
                title="Best Services Grow Your Business Value"
                description="Globally actualize cost effective with resource maximizing
                  leadership skills."
                centerAlign
                dark
              />
            ) : (
              <SectionTitle
                subtitle="Services"
                title="Best Services Grow Your Business Value"
                description="Globally actualize cost effective with resource maximizing
                  leadership skills."
                centerAlign
              />
            )}
            <div className="feature-grid">
              {/* <div
                className={`shadow-sm highlight-card rounded-custom p-5 ${
                  bgDark
                    ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                    : 'bg-white'
                }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-primary-soft mb-32">
                  <span className="fal">
                    <SiSimpleanalytics className="h4 text-primary" />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Advanced analytics</h3>
                  <p>
                    Synergistically pursue accurate initiatives without
                    economically sound imperatives.
                  </p>
                  <p>
                    {' '}
                    Professionally architect unique process improvements via
                    optimal.
                  </p>
                  <h6 className="mt-4">Included with...</h6>
                  <ul className="list-unstyled mb-0">
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? 'text-warning' : 'text-primary'
                        }`}
                      />
                      High-converting
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? 'text-warning' : 'text-primary'
                        }`}
                      />
                      Personal branding
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? 'text-warning' : 'text-primary'
                        }`}
                      />
                      Modernized prospecting
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? 'text-warning' : 'text-primary'
                        }`}
                      />
                      Clean and modern
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? 'text-warning' : 'text-primary'
                        }`}
                      />
                      Showcasing success
                    </li>
                    <li className="py-1">
                      <FaCheckCircle
                        className={`fad fa-check-circle me-2 ${
                          bgDark ? 'text-warning' : 'text-primary'
                        }`}
                      />
                      Bootstrap latest version
                    </li>
                  </ul>
                </div>
                <Link href="/single-service">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div> */}
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${bgDark
                  ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                  : 'bg-white'
                  }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-success-soft mb-32">
                  <span className="fal">
                    <Image
                      className="h3 text-success"
                      src="/icons-web/app-development.png"
                      alt="Web App Development"
                      width={55} height={55}
                    />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Web App Development</h3>
                </div>
                <Link href="/single-service">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${bgDark
                  ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                  : 'bg-white'
                  }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-danger-soft mb-32">
                  <span className="fal">
                    <Image
                      className="h3 text-success"
                      src="/icons-web/smartphone.png"
                      alt="Mobile App Development"
                      width={55} height={55}
                    />                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Mobile App Development</h3>
                </div>
                <Link href="/single-service">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${bgDark
                  ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                  : 'bg-white'
                  }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-dark-soft mb-32">
                  <span className="fal">
                    <Image
                      className="h3 text-success"
                      src="/icons-web/shopify.png"
                      alt="Shopify Development"
                      width={55} height={55}
                    />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Shopify Development</h3>
                </div>
                <Link href="/single-service">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${bgDark
                  ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                  : 'bg-white'
                  }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                  <span className="fal">
                    <Image
                      className="h3 text-success"
                      src="/icons-web/wordpress.png"
                      alt="Wordpress Development"
                      width={55} height={55}
                    />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Wordpress Development</h3>
                </div>
                <Link href="/single-service">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${bgDark
                  ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                  : 'bg-white'
                  }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                  <span className="fal">
                    <Image
                      className="h3 text-success"
                      src="/icons-web/ux.png"
                      alt="UI/UX Development"
                      width={55} height={55}
                    />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">UI/UX Development</h3>
                </div>
                <Link href="/single-service">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${bgDark
                  ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                  : 'bg-white'
                  }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                  <span className="fal">
                    <Image
                      className="h3 text-success"
                      src="/icons-web/blockchain.png"
                      alt="Blockchain Development"
                      width={55} height={55}
                    />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Blockchain Development</h3>
                </div>
                <Link href="/single-service">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${bgDark
                  ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                  : 'bg-white'
                  }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                  <span className="fal">
                    <Image
                      className="h3 text-success"
                      src="/icons-web/agile.png"
                      alt="Cloud and DevOps Solutions"
                      width={55} height={55}
                    />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">Cloud and DevOps Solutions</h3>
                </div>
                <Link href="/single-service">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${bgDark
                  ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                  : 'bg-white'
                  }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                  <span className="fal">
                    <Image
                      className="h3 text-success"
                      src="/icons-web/artificial-intelligence.png"
                      alt="Artificial intelligence"
                      width={55} height={55}
                    />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">AI and Machine Learning Solutions</h3>
                </div>
                <Link href="/single-service">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
              <div
                className={`feature-card shadow-sm rounded-custom p-5 ${bgDark
                  ? 'bg-custom-light promo-border-hover border border-2 border-light text-white'
                  : 'bg-white'
                  }`}
              >
                <div className="icon-box d-inline-block rounded-circle bg-warning-soft mb-32">
                  <span className="fal">
                    <Image
                      className="h3 text-success"
                      src="/icons-web/team.png"
                      alt="MVP Development"
                      width={55} height={55}
                    />
                  </span>
                </div>
                <div className="feature-content">
                  <h3 className="h5">MVP Development</h3>
                </div>
                <Link href="/single-service">
                  <a className="link-with-icon text-decoration-none mt-3">
                    View Details{' '}
                    <i className="far mb-1">
                      <BsArrowRight />
                    </i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOne;
