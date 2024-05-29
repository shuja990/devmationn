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
        "title": "Unlock the Power of Blockchain Technology",
        "desc": "Building Innovative Solutions for Your Decentralized Future"
    },
    "section1": {
        "title": "Transform Your Business with Secure and Transparent Blockchain Solutions",
        "desc": "At DevMations, we are a team of passionate blockchain developers who help businesses leverage the power of this transformative technology. We specialize in building secure, scalable, and user-friendly blockchain applications across various domains. While we don't develop entire blockchains or cryptocurrencies, we offer a range of services to integrate blockchain functionalities into your existing infrastructure. This includes developing NFT marketplaces, smart contracts for automated transactions and agreements, secure payment gateways using blockchain technology, and seamless wallet integration for a smooth user experience.",
        "image": "/blockchain/one.png"
    },
    "projects": {
        "title": "Our Blockchain Development Portfolio",
        "desc": "Showcase your impressive blockchain development projects here."
    },
    "section2": {
        "title": "We Craft Custom Blockchain Solutions for Your Needs",
        "desc": "Our blockchain development process is collaborative and tailored to your specific requirements. We begin by understanding your business goals and the potential applications of blockchain technology. Then, our team of experts designs and develops secure smart contracts, integrates blockchain functionalities into your existing systems, and ensures seamless user interaction with your blockchain-powered solution. We leverage cutting-edge blockchain protocols and stay updated on the evolving landscape to deliver future-proof solutions.",
        "image": "/blockchain/two.jpg"
    },
    "section3": {
        "title": "Why Choose DevMations for Your Blockchain Project?",
        "desc": "By partnering with DevMations, you benefit from:",
        "card1": {
            "stat": "Deep Blockchain Expertise",
            "heading": "Experienced Developers & Secure Practices",
            "subHeading": "Our team possesses in-depth knowledge of blockchain technologies and adheres to the highest security standards."
        },
        "card2": {
            "stat": "Customizable Solutions",
            "heading": "Tailored to Your Specific Needs",
            "subHeading": "We don't offer one-size-fits-all solutions. We build blockchain applications that perfectly integrate with your existing infrastructure."
        },
        "card3": {
            "stat": "Future-Proof Development",
            "heading": "Built for Scalability and Innovation",
            "subHeading": "Our solutions are built with scalability in mind, allowing your blockchain application to grow alongside your business."
        }
    },
    "CTA": {
        "title": "Let's Discuss Your Blockchain Project",
        "desc": "Schedule a free consultation with our blockchain development experts to explore how we can help you leverage blockchain technology to achieve your business goals. Fill out the form below and we'll be in touch shortly."
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
                desc={data.section1.desc} image={data.section1.image} />
            <OurOffice title={data.projects.title}
                desc={data.projects.desc} />
            <SingleServiceFeatureTwo title={data.section2.title}
                desc={data.section2.desc} image={data.section2.image} />
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
