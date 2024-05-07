import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import JobDetails from '@components/career/JobDetails';
import RelatedJob from '@components/career/RelatedJob';
import CareerSingleHeader from '@components/career/CareerSingleHeader';
import ContactForm from '@components/contact-us/ContactForm';

const data = {
    "title": "DevOps & Cloud Engineer",
    "desc": "Automate and streamline Devops processes at DevMations, leveraging cloud technologies for scalable infrastructure.",
    "responsibilities": [
        "Design, implement, and manage DevOps pipelines for continuous integration and deployment (CI/CD).",
        "Provision and manage cloud infrastructure on platforms like AWS, Azure, or GCP.",
        "Automate infrastructure tasks using tools like Terraform, Ansible, or Chef.",
        "Monitor system performance and troubleshoot issues proactively.",
        "Implement security best practices for cloud environments.",
        "Collaborate with development and operations teams to ensure smooth deployments."
    ],
    "requirements": [
        "Bachelor's degree in Computer Science, Information Technology, or a related field (or equivalent experience).",
        "[Y] years of experience in DevOps and cloud engineering.",
        "Strong understanding of DevOps principles and methodologies (CI/CD, Agile).",
        "Expertise in at least one major cloud platform (AWS, Azure, GCP).",
        "Proficiency in infrastructure automation tools (Terraform, Ansible, Chef).",
        "Experience with Linux administration and scripting.",
        "Knowledge of cloud security best practices."
    ],
    "skills": [
        "Cloud platforms (AWS, Azure, GCP)",
        "Infrastructure as Code (IaC) tools (Terraform, Ansible, Chef)",
        "Linux administration (command line, shell scripting)",
        "CI/CD tools (Jenkins, GitLab CI/CD)",
        "Containerization technologies (Docker, Kubernetes)",
        "Version control systems (Git)",
        "Scripting languages (Python, Bash)",
        "Cloud monitoring and logging tools (e.g., CloudWatch, Azure Monitor)",
        "Infrastructure automation best practices"
    ]
}



const CareerSingle = () => {
    return (
        <Layout title={data.title}>
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
