import React from 'react';
import Link from 'next/link';
import { FiClock } from 'react-icons/fi';
import { FaHistory } from 'react-icons/fa';
import { BiMap, BiUser, BiWallet } from 'react-icons/bi';

const JobOverview = () => {
  return (
    <>
      <div className="job-overview-wrap bg-light p-5 sticky-sidebar rounded-custom mt-5 mt-lg-0">
        <h5>Job Overviews</h5>
        <ul className="job-overview-list list-unstyled mt-4">
          <li>
            <i className="far text-primary">
              <BiMap className="mb-2 fa-lg" />
            </i>
            <div className="overview-item">
              <h6 className="mb-0">Location:</h6>
              <span>Remote - Worldwide</span>
            </div>
          </li>
          <li>
            <i className="far text-primary">
              <FiClock className="mb-2 fa-lg" />
            </i>
            <div className="overview-item">
              <h6 className="mb-0">Hours:</h6>
              <span>40h / week</span>
            </div>
          </li>
        </ul>
        <Link href="/contact-us">
          <a className="btn btn-primary d-block mt-5">Apply now</a>
        </Link>
      </div>
    </>
  );
};

export default JobOverview;
