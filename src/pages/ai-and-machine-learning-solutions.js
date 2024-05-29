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
        title: "Unlock the Power of AI & Machine Learning",
        desc: "Transform Your Business with Intelligent Solutions"
    },
    section1: {
        title: "Empower Decision-Making with AI & Machine Learning",
        desc: "At DevMations, we help businesses unlock the true potential of AI and Machine Learning. We don't create models from scratch, but excel at tailoring existing solutions to your specific needs. Our team of experts can leverage Supervised, Unsupervised Learning, MLOps, Fine-Tuning LLMs, NLP, OpenAI, Gemini, and Claude integrations to develop intelligent systems that automate tasks, generate insights, and optimize processes. From streamlining operations to enhancing customer experiences, we empower you to make data-driven decisions that drive real business results.",
        image:"/ai-ml/one.png"
    },
    projects: {
        title: "Our AI & Machine Learning Projects",
        desc: "Showcase your expertise with a compelling portfolio section. Briefly describe some of your successful AI/ML projects here."
    },
    section2: {
        title: "Your Trusted Partner in AI & Machine Learning Integration",
        desc: "We understand that successful AI implementation requires more than just technology. Our team works closely with you to understand your unique challenges and goals.  We then identify the most suitable AI/ML solutions and seamlessly integrate them into your existing workflows.  We also provide ongoing support and maintenance to ensure your AI systems continue to deliver value over time.",
        image:"/ai-ml/AI.jpg"
    },
    section3: {
        title: "Why Choose DevMations for AI & Machine Learning?",
        desc: "Leverage our expertise and experience to gain a competitive advantage:",
        card1: {
            stat: "95% Client Satisfaction",
            heading: "Trusted by Our Clients",
            subHeading: "Our commitment to delivering exceptional results has earned us the trust of businesses across various industries."
        },
        card2: {
            stat: "Expert Team",
            heading: "Skilled Professionals",
            subHeading: "Our team of AI and Machine Learning engineers possess the knowledge and experience to tackle complex challenges."
        },
        card3: {
            stat: "Customizable Solutions",
            heading: "Tailored to Your Needs",
            subHeading: "We don't offer a one-size-fits-all approach. We customize AI solutions to perfectly align with your business goals."
        }
    },
    CTA: {
        title: "Let's Discuss Your AI & Machine Learning Needs",
        desc: "Schedule a free consultation to explore how AI can revolutionize your business. Our experts are here to answer your questions and guide you on your AI journey. Fill out the form below to get started."
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
                desc={data.section2.desc} image={data.section2.image}/>
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
