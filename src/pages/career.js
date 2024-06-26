import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import CareerPromo from '@components/career/CareerPromo';
import CareerFeature from '@components/career/CareerFeature';
import ContactForm from '@components/contact-us/ContactForm';

export async function getServerSideProps() {
  // If there is a need to fetch data dynamically, you can do it here
  // const res = await fetch('https://api.example.com/data');
  // const data = await res.json();

  // For now, return an empty props object
  return {
    props: {}, // Will be passed to the page component as props
  };
}

const Career = () => {
  return (
    <Layout title="Career" desc="This is career page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Career"
        desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
      />
      <CareerFeature />
      <CareerPromo />
      <ContactForm />
      <Footer footerLight />
    </Layout>
  );
};

export default Career;
