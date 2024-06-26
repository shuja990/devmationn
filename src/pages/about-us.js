import React from 'react';
import Layout from '@layout/Layout';
import Navbar from '@layout/Header/Navbar';
import Footer from '@layout/Footer/Footer';
import OurTeam from '@components/our-team/OurTeam';
import OurStory from '@components/our-story/OurStory';
import HeroSectionTwo from '@components/hero-section/HeroSectionTwo';
import TestimonialTwo from '@components/testimonial/TestimonialTwo';
import FeatureImgContentTwo from '@components/feature-img-content/FeatureImgContentTwo';
import ContactForm from '@components/contact-us/ContactForm';

// Server-side rendering function
export async function getServerSideProps() {
  // Fetch any data you need for the page here
  // For example:
  // const res = await fetch('https://api.example.com/about-data');
  // const data = await res.json();

  // For now, returning an empty props object
  return {
    props: {}, // Will be passed to the page component as props
  };
}

const AboutUs = () => {
  return (
    <Layout title="About Us" desc="this is about us page">
      <Navbar classOption="navbar-light" />
      <HeroSectionTwo />
      <OurStory />
      <FeatureImgContentTwo />
      <OurTeam />
      <TestimonialTwo dark={true} bgWhite={false} />
      <ContactForm />
      <Footer footerLight />
    </Layout>
  );
};

export default AboutUs;
