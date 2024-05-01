/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaRegSmile, FaStar } from 'react-icons/fa';
import { BiBuildingHouse, BiCurrentLocation } from 'react-icons/bi';

const CareerSingleHeader = () => {
  return (
    <section
      className="page-header position-relative overflow-hidden ptb-120 bg-dark"
      style={{
        background: "url('/page-header-bg.svg')no-repeat bottom left",
      }}
    >
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-8 col-12">
            <div className="company-info-wrap">
              <div className="company-overview">
                <h1 className="display-5 fw-bold">Senior Backend Developer</h1>
                <ul className="list-unstyled list-inline mb-0 mt-3">
                  <li className="list-inline-item me-4">
                    <span className="far fa-lg me-1">
                      <BiCurrentLocation className="mb-1" />
                    </span>{' '}
                    United Kingdom
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-circle rounded-circle circle-shape-3 position-absolute bg-dark-light right-5"></div>
      </div>
    </section>
  );
};

export default CareerSingleHeader;
