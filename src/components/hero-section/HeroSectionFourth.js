/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import HeroTitle from '../common/HeroTitle';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/autoplay'; // Import Autoplay module style


const HeroSectionFourth = ({ bgDark }) => {

  const data = [
    {
      title: 'Upgrade your business effortlessly with our attractive mobile solutions.',
      subTitle: "Transform your mobile applications with our all-in-one solutions. Utilizing cutting-edge technology, we streamline operations to optimize efficiency and enhance user experience. Let's revolutionize your mobile presence together.",
      image: "/home-carousel/mobile.jpg",
      cta: "Let's Develop Together"
    },
    {
      title: 'Revolutionize your online presence with our state-of-the-art, all-inclusive web app solutions.',
      subTitle: "Maximize your online presence with our comprehensive Web Application Development Service. Using cutting-edge technology, we streamline your web needs to boost efficiency, productivity, and drive success. Let's embark on this journey to digital excellence together.",
      image: "/home-carousel/webdevelopment.png",
      cta: "Let's Build Together"
    },
    {
      title: 'Empower your business with our secure and decentralized blockchain solutions',
      subTitle: "Unlock your business's full potential with our handpicked team of experts, tailored to meet your unique needs and drive your success. Let's take your business to new heights together.",
      image: "/home-carousel/blockchain.png",
      cta: "Let's Build Together"
    },
    {
      title: 'Unlock digital potential with our cloud solutions, seamlessly driving brand success with intuitive interfaces.',
      subTitle: 'Optimize your digital sphere with our specialized cloud solutions. Effortlessly navigate the online landscape and amplify user satisfaction with intuitive interfaces meticulously tailored to propel your brand towards success',
      image: "/home-carousel/cloud.jpg",
      cta: "Let's Deploy together"
    },
    {
      title: 'Optimize your WordPress site for peak performance and user satisfaction with our expert development solutions.',
      subTitle: '',
      image: "/home-carousel/wordpress.png",
      cta: "Let's Build Together"
    },
    {
      title: 'Take your e-commerce business to the next level with our comprehensive Shopify services',
      subTitle: 'Elevate your eCommerce success with our comprehensive Shopify Solutions. Seamlessly create and manage your online store with everything you need at your fingertips. Let us empower you to reach new heights in the world of online business.',
      image: "/home-carousel/shopify.png",
      cta: "Let's Build Together"
    },
    {
      title: 'Elevate your brand with intuitive UI/UX designs for seamless online navigation and heightened user satisfaction',
      subTitle: "Unlock the full potential of your digital presence with our tailored UI/UX design solutions. Seamlessly navigate the online landscape and elevate user satisfaction with intuitive interfaces crafted to empower your brand's success",
      image: "/home-carousel/uiux.png",
      cta: "Let's Design together"
    }
  ]

  return (
    <Swiper
      modules={[Autoplay]} // Add the Autoplay module
      spaceBetween={50} // Adjust space between slides
      slidesPerView={1} // Number of slides per view
      autoplay={{
        delay: 7000, // Delay between transitions (in ms)
        disableOnInteraction: false, // Continue autoplay on swiper interaction
      }}
      pagination={{ clickable: false, enabled: false }} // Disable pagination
      navigation={false} // Disable navigation buttons
    // Add additional Swiper parameters as needed
    >
      {data.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <section
            className={`hero-section ptb-120 ${bgDark ? 'bg-dark' : 'bg-white'}`}
            style={{
              background:
                "url('/shape/dot-dot-wave-shape.svg')no-repeat bottom center",
            }}
          >
            <div className="container">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-xl-5 col-lg-5">
                  <div
                    className="hero-content-wrap mt-5 text-center text-xl-start text-lg-start"
                  >
                    <HeroTitle
                      title={slide.title}
                      desc={slide.subTitle}
                    />
                    <div className="hero-subscribe-form-wrap pt-2 position-relative m-auto m-xl-0 d-none d-md-block d-lg-block d-xl-block">
                      <div
                        className="action-btns pt-2"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <Link href="/request-demo">
                          <a className="btn btn-primary me-3">{slide.cta}</a>
                        </Link>
                        {/* <Link href="/contact-us">
                    <a className="btn btn-outline-primary">Talk to Sales</a>
                  </Link> */}
                      </div>
                      <ul className="nav mt-3">
                        <li className="nav-item">
                          <span className="ms-0">
                            <FaRegCheckCircle className="far me-2 text-primary" />
                            Beyond Code: Engineering Digital Artistry
                          </span>
                        </li>
                        {/* <li className="nav-item">
                    <span>
                      <FaRegCheckCircle className="far me-2 text-primary" />
                      Crafted to Perfection: Your Digital Masterpiece Awaits
                    </span>
                  </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 mt-4 mt-xl-0">
                  <div
                    className="hero-img-wrap position-relative"
                    data-aos="fade-left"
                  >
                    {!bgDark && (
                      <ul className="position-absolute animate-element parallax-element shape-service hide-medium">
                        <li className="layer" data-depth="0.03">
                          <img
                            src="/color-shape/image-1.svg"
                            alt="shape"
                            className="img-fluid position-absolute color-shape-1"
                          />
                        </li>
                        <li className="layer" data-depth="0.02">
                          {/* <img
                      src="/color-shape/feature-2.svg"
                      alt="shape"
                      className="img-fluid position-absolute color-shape-2 z-5"
                    /> */}
                        </li>
                        <li className="layer" data-depth="0.03">
                          <img
                            src="/color-shape/feature-3.svg"
                            alt="shape"
                            className="img-fluid position-absolute color-shape-3"
                          />
                        </li>
                      </ul>
                    )}
                    <div className="hero-img-wrap position-relative">
                      {/* <div className="hero-screen-wrap"> */}
                      {/* <div className="phone-screen"> */}
                      {/* <img
                      src="/screen/phone-screen.png"
                      alt="hero"
                      className="position-relative img-fluid"
                    /> */}
                      {/* </div> */}
                      {/* <div className="mac-screen"> */}
                      <img
                        src={slide.image}
                        alt="hero"
                        className="position-relative img-fluid rounded-custom"
                      />
                      {/* <img
                      src="/landingPageHeader.png"
                      alt="hero "
                      className="position-relative img-fluid rounded-custom"
                    /> */}
                      {/* </div> */}
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSectionFourth;
