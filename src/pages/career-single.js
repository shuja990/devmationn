import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import JobDetails from '@components/career/JobDetails';
import RelatedJob from '@components/career/RelatedJob';
import CareerSingleHeader from '@components/career/CareerSingleHeader';
import ContactForm from '@components/contact-us/ContactForm';

const CareerSingle = () => {
  return (
    <Layout title="Career Single" desc="This is career single page">
      <Navbar classOption="navbar-light" />
      <CareerSingleHeader />
      <JobDetails />
      <RelatedJob />
      <ContactForm />
      <Footer footerLight />
    </Layout>
  );
};

export default CareerSingle;
