import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import JobDetails from '@components/career/JobDetails';
import RelatedJob from '@components/career/RelatedJob';
import CareerSingleHeader from '@components/career/CareerSingleHeader';
import ContactForm from '@components/contact-us/ContactForm';

const data = {
    "title": "Blockchain Developer",
    "desc": "Develop and integrate secure, scalable blockchain solutions at DevMations, a leading service-based company.",
    "responsibilities": [
        "Design, develop, and implement smart contracts for various blockchain platforms.",
        "Ensure security and efficiency of blockchain applications.",
        "Contribute to the development and maintenance of blockchain infrastructure.",
        "Stay up-to-date on the latest advancements in blockchain technology.",
        "Collaborate with cross-functional teams (designers, engineers, product managers).",
        "Write clean, well-documented, and maintainable code."
    ],
    "requirements": [
        "Bachelor's degree in Computer Science, Information Technology, or a related field (or equivalent experience).",
        "4 years of experience developing blockchain applications.",
        "Strong understanding of blockchain concepts (e.g., consensus mechanisms, cryptography).",
        "Proficiency in at least one popular blockchain development language (e.g., Solidity, Go).",
        "Experience with smart contract development frameworks.",
        "Excellent problem-solving and analytical skills.",
        "Passion for innovation and emerging technologies."
    ],
    "skills": [
        "Solidity (or similar language)",
        "Blockchain protocols (e.g., Ethereum, Hyperledger Fabric)",
        "Distributed systems",
        "Cryptographic concepts",
        "API development",
        "Software development best practices",
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
