import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import JobDetails from '@components/career/JobDetails';
import RelatedJob from '@components/career/RelatedJob';
import CareerSingleHeader from '@components/career/CareerSingleHeader';
import ContactForm from '@components/contact-us/ContactForm';

const data = {
  "title": "Full Stack Developer",
  "desc": "Join our innovative development team as a Full Stack Developer where you'll play a crucial role in building and enhancing our web applications using the MERN stack. This position requires a driven individual with a strong technical background and a passion for developing scalable web solutions.",
  "responsibilities": [
    "Design, develop, and maintain web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js).",
    "Collaborate with cross-functional teams to define, design, and ship new features.",
    "Ensure the performance, quality, and responsiveness of applications.",
    "Identify and correct bottlenecks and fix bugs.",
    "Help maintain code quality, organization, and automatization.",
    "Participate in code reviews and team meetings, and contribute to team and organizational improvements."
  ],
  "requirements": [
    "Bachelor’s degree in Computer Science, Information Technology, or related field.",
    "Minimum of 3 years' experience as a Full Stack Developer using the MERN stack.",
    "Strong understanding of JavaScript, including DOM manipulation and the JavaScript object model.",
    "Experience with popular React.js workflows (such as Flux or Redux).",
    "Familiarity with newer specifications of EcmaScript.",
    "Experience with data structure libraries (e.g., Immutable.js).",
    "Knowledge of isomorphic React is a plus.",
    "Familiarity with RESTful APIs.",
    "Knowledge of modern authorization mechanisms, such as JSON Web Token.",
    "Familiarity with modern front-end build pipelines and tools.",
    "Experience with common front-end development tools such as Babel, Webpack, NPM, etc.",
    "Ability to understand business requirements and translate them into technical requirements.",
    "A knack for benchmarking and optimization."
  ],
  "skills": [
    "Proven ability in Full Stack development with a focus on the MERN stack.",
    "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.",
    "Excellent problem-solving skills.",
    "Good understanding of database systems, especially MongoDB.",
    "Excellent communication and teamwork skills.",
    "Strong organizational skills and attention to detail.",
    "Ability to manage multiple projects simultaneously and meet deadlines.",
    "Highly self-motivated and directed."
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
