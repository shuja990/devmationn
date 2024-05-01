import React from 'react';
import Link from 'next/link';
import {
  navHomeOne,
  navHomeTwo,
  // navCompanyLinks
  // , navCompanyPage, 
} from '../../utils/data';

const OffCanvasMenu = () => {
  return (
    <div className="offcanvas-body">
      <ul className="nav col-12 col-md-auto justify-content-center main-menu">
        <li>
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <a className="nav-link">About Us</a>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle d-flex justify-content-between"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Our Services
          </a>
          <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
            <div className="dropdown-grid rounded-custom width-half">
              <div className="dropdown-grid-item">
                <h6 className="drop-heading">Different Home</h6>
                {[...navHomeOne, ...navHomeTwo].map((navH, i) => (
                  <span key={i + 1}>
                    <Link href={navH.href}>
                      <a className="dropdown-link">
                        <span className="demo-list bg-primary rounded text-white fw-bold">
                          {i + 1}
                        </span>
                        <span className="dropdown-info mb-0">
                          <span className="drop-title">{navH.title}</span>
                          <span>{navH.info}</span>
                        </span>
                      </a>
                    </Link>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </li>
        <li>
          <Link href="/contact-us">
            <a className="nav-link">Contact Us</a>
          </Link>
        </li>
        <li>
          <Link href="/careers">
            <a className="nav-link">Careers</a>
          </Link>
        </li>
      </ul>
      <div className="action-btns mt-4 ps-3">
        <a href="#get-started-with-us" className="btn btn-primary" data-bs-dismiss="offcanvas"
        >Get Started</a>
      </div>
    </div>
  );
};

export default OffCanvasMenu;
