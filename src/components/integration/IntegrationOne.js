/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const IntegrationOne = () => {
  const data = [
    {
      title: 'Mobile App Development',
      left: [
        {
          id: 1,
          image: '/icons-web/Andriod/1 (1).svg',
          className: 'integration-1'
        },
        {
          id: 2,
          image: '/icons-web/Andriod/1 (2).svg',
          className: 'integration-2'
        }, {
          id: 3,
          image: '/icons-web/Andriod/1 (3).svg',
          className: 'integration-3'
        },
      ],
      right: [
        {
          id: 7,
          image: '/icons-web/Andriod/1 (4).svg',
          className: 'integration-7'
        }, {
          id: 8,
          image: '/icons-web/Andriod/1 (5).svg',
          className: 'integration-8'
        }
      ]
    },
    {
      title: 'Web Development',
      left: [
        {
          id: 1,
          image: '/icons-web/Web/1 (1).svg',
          className: 'integration-1'
        },
        {
          id: 2,
          image: '/icons-web/Web/1 (2).svg',
          className: 'integration-2'
        },
        {
          id: 3,
          image: '/icons-web/Web/1 (3).svg',
          className: 'integration-3'
        },
        {
          id: 4,
          image: '/icons-web/Web/1 (4).svg',
          className: 'integration-4'
        },
        {
          id: 5,
          image: '/icons-web/Web/1 (5).svg',
          className: 'integration-5'
        },
        {
          id: 6,
          image: '/icons-web/Web/1 (6).svg',
          className: 'integration-6'
        },
      ],
      right: [
        {
          id: 7,
          image: '/icons-web/Web/1 (4).svg',
          className: 'integration-7'
        },
        {
          id: 8,
          image: '/icons-web/Web/1 (5).svg',
          className: 'integration-8'
        },
        {
          id: 9,
          image: '/icons-web/Web/1 (9).svg',
          className: 'integration-9'
        },
        {
          id: 10,
          image: '/icons-web/Web/1 (10).svg',
          className: 'integration-10'
        },
        {
          id: 11,
          image: '/icons-web/Web/1 (11).svg',
          className: 'integration-11'
        },
        {
          id: 12,
          image: '/icons-web/Web/1 (12).svg',
          className: 'integration-12'
        },
      ]
    },
    {
      title: 'Blockchain Development',
      left: [
        {
          id: 1,
          image: '/icons-web/blockchain/1 (1).svg',
          className: 'integration-1'
        },
        {
          id: 2,
          image: '/icons-web/blockchain/1 (2).svg',
          className: 'integration-2'
        }, {
          id: 3,
          image: '/icons-web/blockchain/1 (3).svg',
          className: 'integration-3'
        },
      ],
      right: [
        {
          id: 7,
          image: '/icons-web/blockchain/1 (4).svg',
          className: 'integration-7'
        },
        {
          id: 8,
          image: '/icons-web/blockchain/1 (5).svg',
          className: 'integration-8'
        },
        {
          id: 9,
          image: '/icons-web/blockchain/1 (6).svg',
          className: 'integration-9'
        },
      ]
    },
    {
      title: 'Database Management',
      left: [
        {
          id: 1,
          image: '/icons-web/database/1 (1).svg',
          className: 'integration-1'
        },
        {
          id: 2,
          image: '/icons-web/database/1 (2).svg',
          className: 'integration-2'
        }, {
          id: 3,
          image: '/icons-web/database/1 (3).svg',
          className: 'integration-3'
        },
      ],
      right: [
        {
          id: 7,
          image: '/icons-web/database/1 (4).svg',
          className: 'integration-7'
        },
        {
          id: 8,
          image: '/icons-web/database/1 (5).svg',
          className: 'integration-8'
        },
        {
          id: 9,
          image: '/icons-web/database/1 (6).svg',
          className: 'integration-9'
        },
      ]
    },
    {
      title: 'Quality Assurance',
      left: [
        {
          id: 1,
          image: '/icons-web/testing/1.svg',
          className: 'integration-1'
        },
        {
          id: 2,
          image: '/icons-web/testing/2.svg',
          className: 'integration-2'
        },
      ],
      right: [
        {
          id: 7,
          image: '/icons-web/testing/3.svg',
          className: 'integration-7'
        },
        {
          id: 8,
          image: '/icons-web/testing/4.svg',
          className: 'integration-8'
        }
      ]
    },
    {
      title: 'UI/UX Design',
      left: [
        {
          id: 1,
          image: '/icons-web/ui/1.svg',
          className: 'integration-1'
        },
        {
          id: 2,
          image: '/icons-web/ui/2.svg',
          className: 'integration-2'
        },
        {
          id: 3,
          image: '/icons-web/ui/3.svg',
          className: 'integration-3'
        },
      ],
      right: [
        {
          id: 7,
          image: '/icons-web/ui/4.svg',
          className: 'integration-7'
        },
        {
          id: 8,
          image: '/icons-web/ui/5.svg',
          className: 'integration-8'
        }
      ]
    }
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true); // Toggle to trigger animations

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // Trigger exit animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        setAnimate(true); // Reset for the next entry animation
      }, 500); // Match the duration of the fadeOut animation
    }, 7000);

    return () => clearInterval(interval);
  }, [data.length]);

  const currentData = data[currentIndex];

  return (
    <section className="integration-section ptb-120">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-3">
            <div className={`integration-list-wrap ${animate ? 'fade-enter' : 'fade-exit'}`}>
              {currentData.left.map((integration, i) => (
                <div key={i}>
                  <a
                    className={integration.className}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={integration.title}
                  >
                    <Image
                      width={40}
                      height={40}
                      src={integration.image}
                      alt="integration"
                      className="img-fluid rounded-circle"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className={`col-lg-6 col-12 ${animate ? 'text-enter' : 'text-exit'}`}>
            <div className="section-heading text-center my-5 my-lg-0 my-xl-0">
              <h4 className="text-primary h5">Technologies</h4>
              <h2>{currentData.title}</h2>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="col-lg-4">
              <div className={`integration-list-wrap ${animate ? 'fade-enter' : 'fade-exit'}`}>
                {currentData.right.map((integration, i) => (
                  <Link href="/integration-single" key={i + 1}>
                    <a
                      className={integration.className}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Your Brand Name"
                    >
                      <img
                        src={integration.image}
                        alt="integration"
                        className="img-fluid rounded-circle"
                      />
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row justify-content-center mt-100">
          <div className="col-lg-5 col-md-12">
            <a
              href="integration-single"
              className="mb-4 mb-lg-0 mb-xl-0 position-relative text-decoration-none connected-app-single border border-light border-2 rounded-custom d-block overflow-hidden p-5"
            >
              <div className="position-relative connected-app-content">
                <div className="integration-logo bg-custom-light rounded-circle p-2 d-inline-block">
                  <img
                    src="/integations/4.png"
                    width="40"
                    alt="integration"
                    className="img-fluid"
                  />
                </div>
                <h5>Google Drive</h5>
                <p className="mb-0 text-body">
                  Competently generate unique e-services and client-based
                  models. Globally engage tactical niche
                </p>
              </div>
              <span className="position-absolute integration-badge badge px-3 py-2 bg-primary-soft text-primary">
                Connect
              </span>
            </a>
          </div>

          <div className="col-lg-5 col-md-12">
            <a
              href="integration-single"
              className="position-relative text-decoration-none connected-app-single border border-light border-2 rounded-custom d-block overflow-hidden p-5"
            >
              <div className="position-relative connected-app-content">
                <div className="integration-logo bg-custom-light rounded-circle p-2 d-inline-block">
                  <img
                    src="/integations/9.png"
                    width="40"
                    alt="integration"
                    className="img-fluid"
                  />
                </div>
                <h5>Google Drive</h5>
                <p className="mb-0 text-body">
                  Globally engage tactical niche markets rather than
                  client-based competently generate services
                </p>
              </div>
              <span className="position-absolute integration-badge badge px-3 py-2 bg-danger-soft text-danger">
                Connected
              </span>
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default IntegrationOne;
