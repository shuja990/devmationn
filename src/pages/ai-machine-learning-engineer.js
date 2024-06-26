import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import JobDetails from '@components/career/JobDetails';
import RelatedJob from '@components/career/RelatedJob';
import CareerSingleHeader from '@components/career/CareerSingleHeader';
import ContactForm from '@components/contact-us/ContactForm';

const data = {
  title: "AI & Machine Learning Engineer",
  desc: "Develop and implement intelligent solutions using machine learning at DevMations, a leading service-based company.",
  responsibilities: [
    "Design, develop, and train machine learning models for various applications.",
    "Preprocess and clean large datasets for model training.",
    "Evaluate and optimize model performance using appropriate metrics.",
    "Deploy machine learning models into production environments.",
    "Monitor and maintain deployed models to ensure accuracy and efficiency.",
    "Stay up-to-date on the latest advancements in AI and machine learning.",
    "Collaborate with cross-functional teams (data scientists, engineers, product managers) to translate business needs into AI solutions."
  ],
  requirements: [
    "Bachelor's degree in Computer Science, Mathematics, Statistics, or a related field (or equivalent experience).",
    "3 years of experience developing and deploying machine learning models.",
    "Strong understanding of machine learning algorithms (e.g., supervised learning, unsupervised learning, deep learning).",
    "Proficiency in Python programming languages and libraries (e.g., NumPy, Pandas, scikit-learn, TensorFlow, PyTorch).",
    "Experience with data preprocessing and feature engineering techniques.",
    "Knowledge of machine learning model evaluation metrics.",
    "Experience with cloud platforms for model deployment (e.g., AWS SageMaker, Azure Machine Learning)."
  ],
  skills: [
    "Python programming",
    "Machine learning libraries (scikit-learn, TensorFlow, PyTorch)",
    "Machine learning algorithms (supervised, unsupervised, deep learning)",
    "Data wrangling and preprocessing",
    "Statistical analysis",
    "Model evaluation and optimization",
    "Machine learning model deployment",
    "Cloud platforms for machine learning (AWS SageMaker, Azure Machine Learning)"
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
