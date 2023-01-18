import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import About from '../components/about'
import Footer from '../components/footer'

const AboutPage = (props) => {
  return (
    <>
      <div className="about-page-container">
        <Head>
          <title>AboutPage - Creative Agency Page</title>
          <meta
            property="og:title"
            content="AboutPage - Creative Agency Page"
          />
        </Head>
        <Navigation rootClassName="navigation-root-class-name4"></Navigation>
        <About rootClassName="about-root-class-name"></About>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
      <style jsx>
        {`
          .about-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
        `}
      </style>
    </>
  )
}

export default AboutPage
