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
        "title": "Craft Exceptional User Experiences with UI/UX Design",
        "desc": "Turning ideas into intuitive and engaging interfaces"
    },
    "section1": {
        "title": "Design that Captivates and Converts",
        "desc": "At DevMations, we believe that exceptional UI/UX design is the foundation of any successful digital product. Our team of passionate designers brings together creativity and user-centricity to craft interfaces that are not only visually stunning but also intuitive, user-friendly, and drive results. We leverage cutting-edge design tools like Figma, Adobe XD, and more to create user journeys that are smooth, seamless, and engaging across all devices."
    },
    "projects": {
        "title": "Our UI/UX Design Portfolio",
        "desc": "Showcase your impressive UI/UX design projects here."
    },
    "section2": {
        "title": "We Design for People, Not Just Pixels",
        "desc": "Our UI/UX design process is focused on understanding your unique needs and target audience. We begin with in-depth research and user analysis to gain a deep understanding of user behavior and pain points. Then, we move on to iterative design, prototyping, and user testing to ensure your interface is not only aesthetically pleasing but also highly functional and meets the specific needs of your users. We believe in close collaboration throughout the process, keeping you involved and informed at every step."
    },
    "section3": {
        "title": "The Value of User-Centered Design",
        "desc": "By investing in UI/UX design, you can expect to see significant improvements in:",
        "card1": {
            "stat": "Increased User Engagement",
            "heading": "Keep Users Coming Back for More",
            "subHeading": "A well-designed interface keeps users engaged and coming back for more, ultimately boosting user retention."
        },
        "card2": {
            "stat": "Enhanced Brand Reputation",
            "heading": "Build Trust and Credibility",
            "subHeading": "A positive user experience strengthens your brand image and positions you as a leader in your industry."
        },
        "card3": {
            "stat": "Improved Conversion Rates",
            "heading": "Drive Results and Achieve Goals",
            "subHeading": "An intuitive and user-friendly interface guides users towards desired actions, leading to higher conversion rates."
        }
    },
    "CTA": {
        "title": "Let's Create a User Experience that Matters",
        "desc": "Schedule a free consultation with our UI/UX design experts to discuss your project and explore how we can help you design an interface that drives engagement and achieves your business goals. Fill out the form below and we'll be in touch shortly."
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
