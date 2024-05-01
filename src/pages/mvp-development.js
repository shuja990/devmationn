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
        title: "Validate Your Vision with Rapid MVP Development",
        desc: "Turn Your Ideas into Products Faster"
    },
    section1: {
        title: "Bring Your Ideas to Life Quickly and Efficiently",
        desc: "At DevMations, we understand the importance of validating your product concept before investing significant resources. Our MVP development services are designed to help you get your minimum viable product (MVP) to market quickly and efficiently. We utilize agile methodologies and lean development principles to create a core version of your product with just the essential features. This allows you to gather real-world user feedback and iterate based on market demands, ensuring your final product caters to your target audience's needs."
    },
    projects: {
        title: "Our Successful MVP Development Projects",
        desc: "Showcase your expertise by highlighting some of your successful MVP development projects here. Briefly describe the challenges, solutions, and achieved results."
    },
    section2: {
        title: "A Streamlined Process for Building Your MVP",
        desc: "Our MVP development process is designed to be collaborative and efficient. We work closely with you to understand your vision, target audience, and key functionalities.  We then prioritize features, design a user-friendly interface, and develop a functional MVP within a defined timeframe and budget. Throughout the process, we provide clear communication and keep you involved in every step."
    },
    section3: {
        title: "The Benefits of Choosing DevMations for MVP Development",
        desc: "Gain a competitive advantage with our expertise:",
        card1: {
            stat: "Reduced Time-to-Market",
            heading: "Faster Validation",
            subHeading: "Get your MVP launched quickly and gather valuable user feedback to refine your product strategy."
        },
        card2: {
            stat: "Cost-Effective Development",
            heading: "Focus on Core Features",
            subHeading: "By prioritizing essential functionalities, we minimize development costs while maximizing the value of your MVP."
        },
        card3: {
            stat: "Data-Driven Decisions",
            heading: "Informed Iterations",
            subHeading: "Leverage user feedback and data insights to make informed decisions for future product iterations."
        }
    },
    CTA: {
        title: "Ready to Launch Your MVP?",
        desc: "Let's turn your vision into a reality. Fill out the form below to schedule a free consultation with our MVP development experts. We'll help you validate your concept and develop a successful product roadmap."
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
