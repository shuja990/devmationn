import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Blog from '../components/blog'
import Footer from '../components/footer'

const BlogPage = (props) => {
  return (
    <>
      <div className="blog-page-container">
        <Head>
          <title>BlogPage - Creative Agency Page</title>
          <meta property="og:title" content="BlogPage - Creative Agency Page" />
        </Head>
        <Navigation rootClassName="navigation-root-class-name3"></Navigation>
        <h1 className="blog-page-text">
          <span>Blog Posts</span>
          <br></br>
        </h1>
        <Blog rootClassName="blog-root-class-name"></Blog>
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
      <style jsx>
        {`
          .blog-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .blog-page-text {
            margin-top: var(--dl-space-space-sixunits);
          }
        `}
      </style>
    </>
  )
}

export default BlogPage
