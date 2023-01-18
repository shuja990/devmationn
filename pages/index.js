import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navigation from '../components/navigation'
import Services from '../components/services'
import Portofolio from '../components/portofolio'
import About from '../components/about'
import BlogCard from '../components/blog-card'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Creative Agency Page</title>
          <meta property="og:title" content="Creative Agency Page" />
        </Head>
        <Navigation></Navigation>
        <main className="home-main">
          <div className="home-hero section-container">
            <div className="home-max-width max-content-container">
              <div className="home-heading-container">
                <h1 className="home-text Heading1">
                  <span>We are a creative agency based</span>
                  <br></br>
                  <span>in Massachusetts</span>
                </h1>
                <span className="home-text03">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod
                  </span>
                  <br></br>
                  <span>
                    {' '}
                    tempor incididunt ut labore et dolore magna aliqua.
                  </span>
                </span>
                <button className="home-primary button-primary button-lg button">
                  Get in touch with us
                </button>
              </div>
              <div className="home-gallery">
                <div className="home-container01">
                  <img
                    alt="image"
                    src="/playground_assets/rectangle%2095-1000w.png"
                    className="home-image"
                  />
                </div>
                <div className="home-container02">
                  <img
                    alt="image"
                    src="/playground_assets/rectangle%2095%20%5B1%5D-1000w.png"
                    className="home-image1"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/rectangle%2095%20%5B2%5D-1000w.png"
                    className="home-image2"
                  />
                </div>
                <div className="home-container03">
                  <img
                    alt="image"
                    src="/playground_assets/rectangle%2095%20%5B3%5D-1000w.png"
                    className="home-image3"
                  />
                  <div className="home-container04">
                    <img
                      alt="image"
                      src="/playground_assets/rectangle%2095%20%5B4%5D-1000w.png"
                      className="home-image4"
                    />
                    <img
                      alt="image"
                      src="/playground_assets/rectangle%2095%20%5B5%5D-1000w.png"
                      className="home-image5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Services></Services>
          <Portofolio></Portofolio>
          <About></About>
          <div className="home-process section-container">
            <div className="home-max-width1 max-content-container">
              <span className="home-text07">Our process</span>
              <h2 className="home-text08 Heading2">
                <span>
                  We use a simple three step process.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>Take a look.</span>
              </h2>
              <div className="home-step">
                <span className="home-text12">01</span>
                <div className="home-container05">
                  <span className="home-text13">Finding the best idea</span>
                  <span className="home-text14">
                    There are countless businesses already in existence, so it’s
                    very likely that you won’t be the first person to think of
                    an idea or product. There are countless businesses already
                    in existence, so it’s very likely that you won’t be the
                    first person to think of an idea or product.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="home-step1">
                <span className="home-text15">02</span>
                <div className="home-container06">
                  <span className="home-text16">
                    Intense Brain storming
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="home-text17">
                    Brainstorming is a process of toiling and generating new
                    ideas alone or by holding intensive group discussions
                    between team members in a team.
                  </span>
                </div>
              </div>
              <div className="home-step2">
                <span className="home-text18">03</span>
                <div className="home-container07">
                  <span className="home-text19">Strong design execution</span>
                  <span className="home-text20">
                    As a creative, using your professional judgement, you should
                    begin filtering your various ideas and designs, retaining
                    the strongest relevant material.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="home-max-width2 max-content-container">
              <span className="home-text21">from blog</span>
              <h2 className="home-text22 Heading2">
                <span>Our latest articles and resources</span>
              </h2>
              <span className="home-text24">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation.
                </span>
              </span>
              <Link href="/blog">
                <a className="home-link button-secondary button-lg button">
                  Explore the blog
                </a>
              </Link>
              <div className="home-blog-cards-container">
                <BlogCard rootClassName="blog-card-root-class-name"></BlogCard>
                <BlogCard
                  text1="Aug 14, 2022"
                  button="advertising"
                  image_src="/playground_assets/rectangle%2099%20%5B1%5D-1500w.png"
                  rootClassName="blog-card-root-class-name1"
                ></BlogCard>
                <BlogCard
                  text1="Jul 12, 2022"
                  button="Branding"
                  image_src="/playground_assets/unsplash_h7qmwoxf6z8-1500w.png"
                ></BlogCard>
              </div>
            </div>
          </div>
          <div className="home-banner section-container">
            <div className="home-max-width3 max-content-container">
              <span className="home-text28">what are you waiting?</span>
              <h2 className="home-text29 Heading2">
                <span>Let’s collaborate!</span>
              </h2>
              <span className="home-text31">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation.
                </span>
              </span>
              <button className="home-primary2 button-lg button-secondary-white button">
                Contact us
              </button>
            </div>
          </div>
        </main>
        <div className="home-testimonial">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="home-image6"
          />
          <div className="home-testimonial1">
            <div className="home-container08">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon">
                <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
              </svg>
            </div>
            <span className="home-text35">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                lorem lorem, malesuada in metus vitae, scelerisque accumsan
                ipsum. Nam pellentesque nulla leo, sagittis vehicula sem commodo
                nec.
              </span>
              <br></br>
              <span></span>
            </span>
            <div className="home-container09">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon2">
                <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
              </svg>
            </div>
          </div>
          <span className="home-text38">
            <span></span>
            <span></span>
            <span>Jane Doe</span>
            <span></span>
          </span>
          <span className="home-text43">
            <span className="home-text44">Software Engineer</span>
          </span>
        </div>
        <Footer rootClassName="footer-root-class-name5"></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-hero {
            position: relative;
            padding-top: 128px;
          }
          .home-max-width {
            margin-top: var(--dl-space-space-threeunits);
          }
          .home-heading-container {
            flex: 1;
            display: flex;
            max-width: 100%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text03 {
            color: var(--dl-color-scheme-black);
            font-size: 18px;
            text-align: center;
            line-height: 1.44;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-primary {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-gallery {
            width: 100%;
            display: flex;
            grid-gap: 20px;
            align-items: stretch;
          }
          .home-container01 {
            width: 25%;
            align-self: stretch;
          }
          .home-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-container02 {
            width: 25%;
            display: flex;
            grid-gap: 20px;
            align-items: stretch;
            flex-direction: column;
          }
          .home-image1 {
            width: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-image2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-container03 {
            width: 50%;
            display: flex;
            grid-gap: 20px;
            flex-direction: column;
          }
          .home-image3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-container04 {
            width: 100%;
            display: flex;
            grid-gap: 20px;
          }
          .home-image4 {
            flex: 1;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-image5 {
            flex: 1;
            height: 100%;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .home-process {
            background-color: var(--dl-color-scheme-lightblue);
          }
          .home-max-width1 {
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text07 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text08 {
            color: var(--dl-color-scheme-white);
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-step {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(255, 255, 255, 0.2);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-text12 {
            color: var(--dl-color-scheme-white);
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: 180px;
          }
          .home-container05 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text13 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text14 {
            color: var(--dl-color-scheme-white80);
          }
          .home-step1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(255, 255, 255, 0.2);
            border-width: 1px;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-text15 {
            color: var(--dl-color-scheme-white);
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: 180px;
          }
          .home-container06 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text16 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text17 {
            color: var(--dl-color-scheme-white80);
          }
          .home-step2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            border-color: rgba(255, 255, 255, 0.2);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: 53px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 1px;
          }
          .home-text18 {
            color: var(--dl-color-scheme-white);
            font-size: 64px;
            font-style: normal;
            font-weight: 500;
            line-height: 61px;
            margin-right: 180px;
          }
          .home-container07 {
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text19 {
            color: var(--dl-color-scheme-white);
            font-size: 24px;
            line-height: 31px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text20 {
            color: var(--dl-color-scheme-white80);
          }
          .home-max-width2 {
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text21 {
            color: var(--dl-color-scheme-brown);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text22 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text24 {
            color: var(--dl-color-scheme-black80);
            text-align: center;
            line-height: 26px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-link {
            margin-bottom: var(--dl-space-space-threeunits);
            text-decoration: none;
          }
          .home-blog-cards-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-banner {
            background-color: var(--dl-color-scheme-brown);
          }
          .home-max-width3 {
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-text28 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 700;
            margin-bottom: 4px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .home-text29 {
            color: var(--dl-color-scheme-white);
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text31 {
            color: var(--dl-color-scheme-white);
            text-align: center;
            line-height: 26px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-primary2 {
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .home-testimonial {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            min-width: 100%;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-image6 {
            width: var(--dl-size-size-xxlarge);
            height: var(--dl-size-size-xxlarge);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .home-testimonial1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-container08 {
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon {
            width: var(--dl-size-size-small);
            margin-bottom: -6rem;
          }
          .home-text35 {
            font-size: 1.15rem;
            max-width: 600px;
            margin-top: var(--dl-space-space-threeunits);
            text-align: center;
            padding-left: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-twounits);
          }
          .home-container09 {
            display: flex;
            align-self: flex-end;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-icon2 {
            width: var(--dl-size-size-small);
            margin-top: -6rem;
          }
          .home-text38 {
            font-size: 1.5rem;
            max-width: 600px;
            text-align: center;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text43 {
            max-width: 600px;
            text-align: center;
            font-weight: 600;
          }
          .home-text44 {
            color: #595959;
            font-style: normal;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .home-heading-container {
              max-width: 100%;
              margin-bottom: 42px;
            }
            .home-gallery {
              flex-direction: column;
            }
            .home-container01 {
              width: 100%;
            }
            .home-container02 {
              width: 100%;
              flex-direction: row;
            }
            .home-container03 {
              width: 100%;
              align-items: stretch;
            }
            .home-blog-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .home-image6 {
              margin-bottom: 0px;
            }
            .home-text35 {
              margin-top: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .home-text {
              font-size: 48px;
            }
            .home-container02 {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
            .home-image1 {
              height: 100%;
            }
            .home-container04 {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
            .home-image4 {
              width: 100%;
            }
            .home-image5 {
              width: 100%;
            }
            .home-text12 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-text15 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-text18 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .home-testimonial {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-text12 {
              margin-right: var(--dl-space-space-twounits);
            }
            .home-text15 {
              margin-right: var(--dl-space-space-twounits);
            }
            .home-text18 {
              margin-right: var(--dl-space-space-twounits);
            }
            .home-testimonial {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-image6 {
              width: 200px;
            }
            .home-icon {
              margin-bottom: 0px;
            }
            .home-text35 {
              width: auto;
            }
            .home-icon2 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
