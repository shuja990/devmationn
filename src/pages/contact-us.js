import React from 'react';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import PageHeader from '@components/common/PageHeader';
import ContactCard from '@components/contact-us/ContactCard';
import ContactForm from '@components/contact-us/ContactForm';

export async function getServerSideProps() {
    // If there is a need to fetch data dynamically, you can do it here
    // const res = await fetch('https://api.example.com/data');
    // const data = await res.json();

    // For now, return an empty props object
    return {
        props: {}, // Will be passed to the page component as props
    };
}

const ContactUs = () => {
    return (
        <Layout title="Contact Us" desc="This is contact us page">
            <Navbar classOption="navbar-light" />
            <PageHeader
                title="Contact Us"
                desc="Transform your digital landscape with Devmations. Our focus on cutting-edge technology and client satisfaction guarantees that your journey is smooth and rewarding. Take the first step towards digital transformation by reaching out to us now. Your success story starts here."
            />
            <ContactCard />
            <ContactForm />
            <Footer />
        </Layout>
    );
};

export default ContactUs;
