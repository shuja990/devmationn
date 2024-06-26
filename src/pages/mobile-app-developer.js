import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import JobDetails from '@components/career/JobDetails';
import RelatedJob from '@components/career/RelatedJob';
import CareerSingleHeader from '@components/career/CareerSingleHeader';
import ContactForm from '@components/contact-us/ContactForm';

const data = {
  title: "Mobile App Developer (React Native)",
  desc: "Join our dynamic team as a Mobile App Developer specializing in React Native. In this role, you'll be pivotal in designing and implementing mobile applications that deliver seamless and innovative user experiences on both Android and iOS platforms.",
  responsibilities: [
    "Develop and maintain high-quality mobile applications using React Native.",
    "Translate designs and wireframes into high-quality code.",
    "Ensure the best possible performance, quality, and responsiveness of applications.",
    "Work with native modules when required.",
    "Integrate third-party APIs.",
    "Run tests to identify and fix bugs in a timely manner.",
    "Maintain code and write automated tests to ensure the product is of the highest quality.",
    "Participate in and contribute to technology, design, and architecture discussions."
  ],
  requirements: [
    "Bachelor’s degree in Computer Science, Information Technology, or a related field.",
    "Minimum of 3 years' experience in mobile development, with a strong focus on React Native.",
    "Proven experience in developing cross-platform mobile applications for Android and iOS.",
    "Strong knowledge of JavaScript and React.",
    "Familiarity with state/data management libraries (such as Redux or Context API).",
    "Experience with code versioning tools, such as Git.",
    "Familiarity with RESTful APIs to connect React Native applications to back-end services.",
    "Understanding of modern mobile UI/UX design principles and interface guidelines.",
    "Experience with automated testing suites, like Jest or Mocha."
  ],
  skills: [
    "Strong proficiency in JavaScript, including ES6+ syntax.",
    "Demonstrable portfolio of released applications on the App store or the Android market.",
    "Excellent problem-solving skills and ability to think algorithmically.",
    "Strong communication skills to effectively collaborate with designers, developers, and other team members.",
    "Ability to manage workload with minimal supervision.",
    "Detail-oriented approach with a focus on quality and performance."
  ]
};

export async function getServerSideProps() {
  // Return the predefined data
  return {
    props: { data }
  };
}

const CareerSingle = ({ data }) => {
  return (
    <Layout title={data.title}>
      <Navbar classOption="navbar-light" />
      <CareerSingleHeader title={data.title} />
      <JobDetails 
        desc={data.desc} 
        skills={data.skills} 
        responsibilities={data.responsibilities} 
        requirements={data.requirements} 
      />
      <RelatedJob />
      <ContactForm />
      <Footer footerLight />
    </Layout>
  );
};

export default CareerSingle;
