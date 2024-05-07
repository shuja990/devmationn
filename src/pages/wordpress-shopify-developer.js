import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import JobDetails from '@components/career/JobDetails';
import RelatedJob from '@components/career/RelatedJob';
import CareerSingleHeader from '@components/career/CareerSingleHeader';
import ContactForm from '@components/contact-us/ContactForm';

const data = {
    "title": "WordPress & Shopify Developer",
    "desc": "Build and maintain dynamic e-commerce experiences for DevMations clients using WordPress and Shopify.",
    "responsibilities": [
      "Develop custom themes and plugins for WordPress websites.",
      "Integrate and customize Shopify stores for optimal functionality.",
      "Ensure responsiveness and user-friendliness across all devices.",
      "Maintain and update existing WordPress and Shopify websites.",
      "Troubleshoot and resolve technical issues.",
      "Collaborate with designers and project managers to achieve client goals."
    ],
    "requirements": [
      "Bachelor's degree in Computer Science, Information Technology, or a related field (or equivalent experience).",
      "4+ years of experience developing WordPress and/or Shopify websites.",
      "Proficiency in PHP, HTML, CSS, and JavaScript.",
      "Experience with WordPress theme and plugin development.",
      "Solid understanding of Shopify development tools and APIs.",
      "Experience with e-commerce best practices (e.g., SEO, payment gateways).",
      "Strong problem-solving and analytical skills."
    ],
    "skills": [
      "PHP",
      "HTML",
      "CSS",
      "JavaScript (e.g., jQuery)",
      "WordPress development (themes, plugins)",
      "Shopify development (themes, apps)",
      "E-commerce best practices (SEO, security)",
      "Version control systems (e.g., Git)"
    ]
  }
  


const CareerSingle = () => {
    return (
        <Layout title={data.title} >
            <Navbar classOption="navbar-light" />
            <CareerSingleHeader title={data.title} />
            <JobDetails desc={data.desc} skills={data.skills} responsibilities={data.responsibilities} requirements={data.requirements} />
            <RelatedJob />
            <ContactForm />
            <Footer footerLight />
        </Layout>
    );
};

export default CareerSingle;
