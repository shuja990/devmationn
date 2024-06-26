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
        title: "Unlock the Power of WordPress with Expert Development",
        desc: "Crafting Custom Websites, Plugins, and Performance Solutions"
    },
    section1: {
        title: "Transform Your WordPress Website into a Success Story",
        desc: "At DevMations, we're passionate about helping businesses leverage the full potential of WordPress. Our skilled developers offer a comprehensive suite of services, from crafting stunning and functional WordPress websites to building custom plugins and optimizing performance for a seamless user experience. Whether you need a new website from scratch, want to enhance an existing one, or require assistance with plugin development or speed optimization, we have the expertise to deliver exceptional results.",
        image: "/wordpress/one.jpg"
    },
    projects: {
        title: "Our Successful WordPress Development Projects",
        desc: "Showcase your impressive WordPress development projects here."
    },
    section2: {
        title: "We Go Beyond Design: A Holistic Approach to WordPress",
        desc: "Our WordPress development services encompass all aspects of your website's needs. We collaborate closely with you to understand your unique goals and target audience. Our design team creates a visually appealing and user-friendly website that reflects your brand identity. Our developers ensure the technical foundation is secure, scalable, and optimized for performance. Additionally, we offer custom plugin development to extend WordPress functionalities and cater to your specific requirements. Finally, we can help optimize your website's speed and performance, ensuring a fast and smooth user experience for your visitors.",
        image: "/wordpress/two.jpg"
    },
    section3: {
        title: "Why Choose DevMations for Your WordPress Needs?",
        desc: "By partnering with DevMations, you benefit from:",
        card1: {
            stat: "Custom WordPress Solutions",
            heading: "Tailored Websites and Plugins",
            subHeading: "We go beyond templates, creating a website and functionalities that perfectly align with your unique needs."
        },
        card2: {
            stat: "Performance-Focused Development",
            heading: "Fast Loading Speeds, Positive User Experience",
            subHeading: "Our development expertise ensures your website delivers a fast and seamless experience for your visitors."
        },
        card3: {
            stat: "Ongoing Support and Maintenance",
            heading: "Peace of Mind and Continued Growth",
            subHeading: "We offer ongoing support to keep your website secure, updated, and optimized for long-term success."
        }
    },
    CTA: {
        title: "Let's Build Your Dream WordPress Website",
        desc: "Schedule a free consultation with our WordPress development experts to discuss your project and explore how we can help you create a website that converts. Fill out the form below and we'll be in touch shortly."
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
            <ContactForm
                title={data.CTA.title}
                desc={data.CTA.desc}
            />
            <Footer footerLight />
        </Layout>
    );
};

export default SingleService;
