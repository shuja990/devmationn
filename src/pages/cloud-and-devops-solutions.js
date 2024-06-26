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
        title: "Streamline Your Infrastructure with Cloud & DevOps Solutions",
        desc: "Optimizing Efficiency, Scalability, and Agility for Your Business"
    },
    section1: {
        title: "Embrace Cloud-Native Development and DevOps Practices",
        desc: "At DevMations, we empower businesses with robust cloud and DevOps solutions. Our team of certified cloud architects and DevOps engineers leverages leading platforms like AWS, Azure, and GCP to design, deploy, and manage your infrastructure with maximum efficiency and scalability. We implement CI/CD pipelines for automated builds and deployments, ensuring faster time-to-market and reduced risks. Additionally, we utilize tools like Docker, Kubernetes, Terraform, and Ansible to streamline infrastructure provisioning, configuration management, and orchestration. By combining these technologies, we create a secure, reliable, and agile cloud environment that empowers your business to innovate and grow.",
        image: "/cloud-dev-ops/one.png"
    },
    projects: {
        title: "Our Successful Cloud & DevOps Projects",
        desc: "Showcase your impressive Cloud & DevOps projects here."
    },
    section2: {
        title: "The Benefits of Our Cloud & DevOps Expertise",
        desc: "Partnering with DevMations for your cloud and DevOps needs unlocks a world of advantages. Our certified experts design, deploy, and manage your infrastructure on leading cloud platforms like AWS, Azure, and GCP, optimizing for efficiency, scalability, and cost savings. We implement automated CI/CD pipelines and leverage tools like Docker and Kubernetes to streamline development and deployment, while prioritizing security and reliability with robust measures and disaster recovery plans. This holistic approach empowers your business to innovate faster and thrive in the cloud.",
        image: "/cloud-dev-ops/two.jpg"
    },
    section3: {
        title: "Why Choose DevMations for Your Cloud & DevOps Needs?",
        desc: "We offer a comprehensive suite of cloud and DevOps services, including:",
        card1: {
            stat: "Cloud Strategy & Migration",
            heading: "Guiding Your Cloud Journey",
            subHeading: "We help you define your cloud strategy, assess migration feasibility, and seamlessly migrate your workloads to the cloud."
        },
        card2: {
            stat: "DevOps Implementation & Automation",
            heading: "Streamlining Your Development Workflow",
            subHeading: "Our experts implement CI/CD pipelines and automation tools to optimize your development and deployment processes."
        },
        card3: {
            stat: "Ongoing Management & Support",
            heading: "Ensuring Peak Performance",
            subHeading: "We provide ongoing monitoring, maintenance, and support to keep your cloud infrastructure running smoothly and securely."
        }
    },
    CTA: {
        title: "Let's Discuss Your Cloud & DevOps Strategy",
        desc: "Schedule a free consultation with our cloud and DevOps experts to explore how we can optimize your infrastructure and accelerate your business growth. Fill out the form below and we'll be in touch shortly."
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
            {/* <SingleServiceRegister /> */}
            <ContactForm
                title={data.CTA.title}
                desc={data.CTA.desc}
            />
            <Footer footerLight />
        </Layout>
    );
};

export default SingleService;
