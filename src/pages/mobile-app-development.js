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
        "title": "Craft Powerful Mobile Apps for Any Device",
        "desc": "Native & Cross-Platform Development Solutions"
    },
    "section1": {
        "title": "Turn Your Mobile App Idea into Reality",
        "desc": "At DevMations, we bring your mobile app vision to life. We specialize in building user-centric applications for iOS and Android using cutting-edge technologies like React Native, Flutter, native Java/Kotlin, and Swift. Our team of experienced developers will craft an app that's not only visually stunning but also highly functional, engaging, and optimized for performance across all devices. Whether you need a social networking app, an e-commerce platform, or a custom business tool, we have the expertise to deliver a solution that exceeds your expectations.",
        "image":"/mobile/one.png"
    },
    "projects": {
        "title": "Our Mobile App Portfolio",
        "desc": "Showcase your successful mobile app projects here."
    },
    "section2": {
        "title": "We Build Mobile Apps That Drive Results",
        "desc": "Our mobile app development process is designed to ensure a smooth and successful journey. We start by collaborating with you to understand your specific needs and target audience. Then, we move on to meticulous planning, design, development, and rigorous testing before launch. Throughout the process, we prioritize clear communication and keep you updated on every step. We also offer ongoing maintenance and support to ensure your app stays up-to-date and delivers a seamless user experience.",
        "image":"/mobile/two.png"
    },
    "section3": {
        "title": "Your Trusted Mobile App Development Partner",
        "desc": "We have a proven track record of success in mobile app development. Here are some key highlights:",
        "card1": {
            "stat": "100+",
            "heading": "Completed Mobile App Projects",
            "subHeading": "We've helped businesses of all sizes achieve their mobile goals."
        },
        "card2": {
            "stat": "4.8",
            "heading": "Average Client Rating",
            "subHeading": "Our commitment to quality is reflected in our outstanding client satisfaction."
        },
        "card3": {
            "stat": "On-Time Delivery",
            "heading": "Reliable Project Management",
            "subHeading": "We understand the importance of deadlines and consistently deliver projects on time."
        }
    },
    "CTA": {
        "title": "Let's Discuss Your Mobile App Project",
        "desc": "Schedule a free consultation with our mobile app development experts to discuss your needs and explore how we can help you achieve your goals. Fill out the form below and we'll be in touch shortly."
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
                desc={data.section1.desc} image={data.section1.image}/>
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
