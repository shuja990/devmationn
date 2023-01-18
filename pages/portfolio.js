import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Portofolio from '../components/portofolio'
import Footer from '../components/footer'

const Portfolio = (props) => {
  return (
    <>
      <div className="portfolio-container">
        <Head>
          <title>Portfolio - Creative Agency Page</title>
          <meta
            property="og:title"
            content="Portfolio - Creative Agency Page"
          />
        </Head>
        <Navigation rootClassName="navigation-root-class-name"></Navigation>
        <Portofolio rootClassName="portofolio-root-class-name"></Portofolio>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .portfolio-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-end;
          }
        `}
      </style>
    </>
  )
}

export default Portfolio
