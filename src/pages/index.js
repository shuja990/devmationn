import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import ServiceOne from '@components/services/ServiceOne';
import IntegrationOne from '@components/integration/IntegrationOne';
import TestimonialOne from '@components/testimonial/TestimonialOne';
import WorkProcessTwo from '@components/workprocess/WorkProcessTwo';
import HeroSectionFourth from '@components/hero-section/HeroSectionFourth';
import ContactForm from '@components/contact-us/ContactForm';
import SingleServicePromo from '@components/services/SingleServicePromo';

const SassCompanyTwoHome = () => {
  const data = {
    header: {
      title: "Elevate Your Business with Premier Web App Development",
      desc: "Custom Solutions Using Cutting-edge Technologies"
    },
    section1: {
      title: "Transform Your Ideas into Digital Success",
      desc: "At DevMations, we specialize in creating robust, scalable, and efficient web applications tailored to your business needs. Leveraging the latest technologies in MERN Stack, Next.js, Python, and more, we ensure your web app not only meets but exceeds modern performance standards. Our approach integrates seamless functionality with striking aesthetics, ensuring a compelling user experience. Whether you're looking to streamline operations, increase user engagement, or expand revenue channels, our expert developers are here to turn your vision into reality."
    },
    projects: {
      title: "Web App Development Projects",
      desc: "TO BE ADDED"
    },
    section2: {
      title: "Comprehensive Web Solutions That Grow with Your Business",
      desc: "Our web app development services are designed to be as dynamic as your business. From initial concept to final rollout, and beyond into ongoing maintenance, we're with you at every step. Our team excels in Laravel, Vue.js, PHP, Django, and Go, crafting applications that are not only fast and reliable but also secure and scalable. With our proactive approach to project management, we keep you informed and involved, ensuring that your web app aligns perfectly with both your immediate needs and long-term goals."
    },
    section3: {
      title: "Why Choose DevMations?",
      desc: "We go beyond development to become your trusted partner:",
      card1: {
        stat: "95%",
        heading: "Client Satisfaction Rate",
        subHeading: "Our commitment to quality has consistently earned us high praise from our clients."
      },
      card2: {
        stat: "80%",
        heading: "Repeat Business",
        subHeading: "Clients trust us to come back for their next projects, a testament to our effective solutions."
      },
      card3: {
        stat: "30%",
        heading: "Faster Delivery",
        subHeading: "Utilizing agile methodologies, our teams deliver your projects up to 30% faster than traditional methods."
      }
    },
    CTA: {
      title: "Ready to Start Your Web App Journey?",
      desc: "Let's make your vision come to life. Fill out the form below to schedule a consultation with one of our web development experts. We're excited to work with you to build something amazing. Your next big step starts here."
    }
  }

  return (
    <Layout>
      <Navbar />
      <HeroSectionFourth />
      <SingleServicePromo title={data.section3.title}
        desc={data.section3.desc} card1={data.section3.card1} card2={data.section3.card2} card3={data.section3.card3} />
      <ServiceOne />
      <WorkProcessTwo />
      <IntegrationOne />
      <TestimonialOne darkBg />
      <ContactForm />
      <Footer footerLight />
    </Layout>
  );
};

export default SassCompanyTwoHome;
