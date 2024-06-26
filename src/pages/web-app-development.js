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
  header: {
    title: "Elevate Your Business with Premier Web Development Solutions",
    desc: "Custom Solutions Using Cutting-edge Technologies"
  },
  section1: {
    title: "Transform Your Ideas into Digital Success",
    desc: "At DevMations, we specialize in creating robust, scalable, and efficient web applications tailored to your business needs. Leveraging the latest technologies in MERN Stack, Next.js, Python, and more, we ensure your web app not only meets but exceeds modern performance standards. Our approach integrates seamless functionality with striking aesthetics, ensuring a compelling user experience. Whether you're looking to streamline operations, increase user engagement, or expand revenue channels, our expert developers are here to turn your vision into reality.",
    image: "/web/one.png"
  },
  projects: {
    title: "Web Development Projects",
    desc: "TO BE ADDED"
  },
  section2: {
    title: "Comprehensive Web Solutions That Grow with Your Business",
    desc: "Our web development services are designed to be as dynamic as your business. From initial concept to final rollout, and beyond into ongoing maintenance, we're with you at every step. Our team excels in Laravel, Vue.js, PHP, Django, and Go, crafting applications that are not only fast and reliable but also secure and scalable. With our proactive approach to project management, we keep you informed and involved, ensuring that your web app aligns perfectly with both your immediate needs and long-term goals.",
    image: "/web/two.jpg"
  },
  section3: {
    title: "Proven Success in Web Development",
    desc: "With over 100 successful projects delivered, we are proud to showcase the impact of our work:",
    card1: {
      stat: "97%",
      heading: "Project Completion Rate",
      subHeading: "We have a proven track record of delivering high-quality web solutions that meet our clients' expectations."
    },
    card2: {
      stat: "20+ Technologies",
      heading: "Diverse Tech Stack",
      subHeading: "Our team possesses expertise in a wide range of technologies, allowing us to create custom solutions for your unique needs."
    },
    card3: {
      stat: "4.8 Star Rating",
      heading: "Client Satisfaction",
      subHeading: "Our commitment to excellence is reflected in our outstanding client reviews and long-term partnerships."
    }
  },
  CTA: {
    title: "Ready to Start Your Web Development Journey?",
    desc: "Let's make your vision come to life. Fill out the form below to schedule a consultation with one of our web development experts. We're excited to work with you to build something amazing. Your next big step starts here."
  }
};

export async function getServerSideProps() {
  // Return the predefined data
  return {
    props: { data }
  };
}

const SingleService = ({ data }) => {
  return (
    <Layout title="Services" desc="This is services single page">
      <Navbar />
      <PageHeader
        title={data.header.title}
        desc={data.header.desc}
      />
      <SingleServiceFeature
        title={data.section1.title}
        desc={data.section1.desc}
        image={data.section1.image}
      />
      <OurOffice
        title={data.projects.title}
        desc={data.projects.desc}
      />
      <SingleServiceFeatureTwo
        title={data.section2.title}
        desc={data.section2.desc}
        image={data.section2.image}
      />
      <SingleServicePromo
        title={data.section3.title}
        desc={data.section3.desc}
        card1={data.section3.card1}
        card2={data.section3.card2}
        card3={data.section3.card3}
      />
      <ContactForm
        title={data.CTA.title}
        desc={data.CTA.desc}
      />
      <Footer footerLight />
    </Layout>
  );
};

export default SingleService;
