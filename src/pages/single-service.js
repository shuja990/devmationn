import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import SingleServicePromo from '@components/services/SingleServicePromo';
import SingleServiceFeature from '@components/services/SingleServiceFeature';
import SingleServiceFeatureTwo from '@components/services/SingleServiceFeatureTwo';
import OurOffice from '@components/our-office/OurOffice';
import ContactForm from '@components/contact-us/ContactForm';

const data = {
  "header": {
    "title": "Build a Thriving Online Store with Expert Shopify Development",
    "desc": "Seamless Design & Development to Fuel Your E-commerce Growth"
  },
  "section1": {
    "title": "Turn Your E-commerce Vision into Reality",
    "desc": "At DevMations, we specialize in crafting exceptional Shopify stores that not only look stunning but also convert visitors into loyal customers. Our team of experienced developers leverages their expertise in Shopify themes, plugins, and integrations to build a robust and scalable online store tailored to your specific needs and brand identity. We focus on creating a seamless user experience that encourages exploration, simplifies purchases, and ultimately drives sales growth."
  },
  "projects": {
    "title": "Our Successful Shopify Development Projects",
    "desc": "Showcase your impressive Shopify development projects here."
  },
  "section2": {
    "title": "From Design to Launch and Beyond: Your Shopify Partner",
    "desc": "We offer a comprehensive Shopify development service that takes you from the initial concept all the way to a thriving online store. We begin by collaborating with you to understand your brand vision and target audience. Then, our design team creates a visually appealing and user-friendly storefront. Our developers meticulously craft the technical aspects of your store, ensuring optimal performance and scalability. Finally, we provide ongoing support and maintenance to keep your store secure, updated, and meeting your evolving needs."
  },
  "section3": {
    "title": "The Value of Our Shopify Development Expertise",
    //   "desc": "By partnering with DevMations for your Shopify development, you can expect to benefit from:",
    "card1": {
      "stat": "Increased Sales Conversions",
      "heading": "Turn Visitors into Paying Customers",
      "subHeading": "Our focus on user experience optimization leads to a smoother buying journey, resulting in higher conversion rates."
    },
    "card2": {
      "stat": "Enhanced Brand Experience",
      "heading": "Showcase Your Brand Uniquely",
      "subHeading": "A custom-designed Shopify store reflects your brand identity and creates a stronger connection with your audience."
    },
    "card3": {
      "stat": "Reduced Management Time",
      "heading": "Focus on What Matters Most",
      "subHeading": "Our ongoing maintenance ensures your store stays updated and secure, freeing up your time to focus on running your business."
    }
  },
  "CTA": {
    "title": "Let's Build Your Dream Shopify Store",
    "desc": "Schedule a free consultation with our Shopify development experts to discuss your project and explore how we can help you create a high-converting online store. Fill out the form below and we'll be in touch shortly."
  }
}



const SingleService = () => {
  return (
    <Layout title="Services" desc="This is services single page">
      <Navbar />
      <PageHeader
        title={data.header.title}
        desc={data.header.desc}
      />
      <SingleServiceFeature title={data.section1.title}
        desc={data.section1.desc} />
      <OurOffice title={data.projects.title}
        desc={data.projects.desc} />
      <SingleServiceFeatureTwo title={data.section2.title}
        desc={data.section2.desc} />
      <SingleServicePromo title={data.section3.title}
        desc={data.section3.desc} card1={data.section3.card1} card2={data.section3.card2} card3={data.section3.card3} />
      {/* <SingleServiceRegister /> */}
      <ContactForm title={data.CTA.title}
        desc={data.CTA.desc} />

      <Footer footerLight />
    </Layout>
  );
};

export default SingleService;
