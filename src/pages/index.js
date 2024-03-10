import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import ReviewOne from '@components/review/ReviewOne';
import LatestBlog from '@components/blogs/LatestBlog';
import SupportOne from '@components/support/SupportOne';
import ServiceOne from '@components/services/ServiceOne';
import IntegrationOne from '@components/integration/IntegrationOne';
import TestimonialOne from '@components/testimonial/TestimonialOne';
import WorkProcessTwo from '@components/workprocess/WorkProcessTwo';
import HeroSectionThree from '@components/hero-section/HeroSectionThree';
import HeroSectionFourth from '@components/hero-section/HeroSectionFourth';

const SassCompanyTwoHome = () => {
  return (
    <Layout>
      <Navbar />
      {/* <HeroSectionThree /> */}
      <HeroSectionFourth />
      <ReviewOne />
      <ServiceOne />
      <WorkProcessTwo />
      <TestimonialOne />
      <IntegrationOne />
      {/* <LatestBlog /> */}
      <SupportOne className />
      <Footer footerLight />
    </Layout>
  );
};

export default SassCompanyTwoHome;
