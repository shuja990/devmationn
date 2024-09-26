import PortfolioCard from "@components/portfolio/PortfolioCard";
import Image from "next/image";
import React, { useState } from "react";


const PortfolioTab = () => {
  const portfolioData = [
    {
      "category": "Finance & Accounting",
      "projects": [
        {
          "title": "Banking App",
          "description": "This mobile app (FinX) empowers users with secure access and management of their finances, featuring Plaid & Dwolla integration",
          "image": "/portfolio/Bank Website Project 1.png",
          "link": "https://banking-theta-six.vercel.app/sign-in"
        },
        {
          "title": "I-CONTA",
          "description": "I-CONTA offers expert tax consulting and accounting services, transforming the accountant-entrepreneur relationship. Access your financial data anytime, anywhere, upload documents, and easily calculate taxes.",
          "image": "/portfolio/I-CONTA project 23.png",
          "link": "https://reliable-douhua-a0cd31.netlify.app/"
        },
        {
          "title": "Invoice Generator",
          "description": "Transform billing into a breeze with our dynamic Invoice Generator. Designed for versatility, it adapts to any business model. Automate calculations, customize templates, and generate professional invoices in seconds. Boost accuracy, save time, and maintain a healthy cash flow. Elevate your financial management effortlessly.",
          "image": "/portfolio/Invoice Generator project 31.png",
          "link": "https://invoice-generator-shuja.netlify.app/"
        },
      ]
    },
    {
      "category": "AI & Machine Learning",
      "projects": [
        {
          "title": "Devmations AI",
          "description": "Devmation AI is an intelligent assistant that answers questions and queries in real time, offering businesses an efficient, automated way to handle customer interactions. Perfect for startups and enterprises looking to enhance customer service and engagement.",
          "image": "/portfolio/project 4 ai chat boot.png",
          "link": "https://ai.devmations.com/"
        },
        {
          "title": "Backdrop AI",
          "description": "Revolutionize your photos with AI magic. Restore, fill, remove, and recolor objects effortlessly. Secure authentication protects your creations. Perfect for photographers, designers, and businesses seeking professional-grade image editing without the complexity.",
          "image": "/portfolio/backdrop ai project 8.png",
          "link": "https://backdrop-ai.vercel.app/"
        },
        {
          "title": "Podcast AI",
          "description": "Unleash your podcast's potential with our AI-powered platform. Upload, stream, and discover trending content effortlessly. Secure authentication protects your audio. Ideal for creators and listeners, bringing cutting-edge tech to podcasting.",
          "image": "/portfolio/project 6 podcaster ai.png",
          "link": "https://podcast-ai-hazel.vercel.app/"
        },
        {
          "title": "IntelliSummarizer",
          "description": "AI-powered brilliance at your fingertips. Transform lengthy documents and books into concise, insightful summaries. Save time, boost productivity, and unlock knowledge effortlessly. Perfect for professionals, students, and avid readers seeking quick comprehension.",
          "image": "/portfolio/intellsummarizerproject 7.png",
          "link": "https://intellisummarizer.vercel.app/"
        },
        {
          "title": "Brain Wave",
          "description": "Revolutionize conversations with AI-powered chatting. Engage in intelligent dialogues, access instant information, and boost productivity. Secure, customizable, and infinitely scalable. Perfect for businesses seeking to enhance customer service, streamline operations, or pioneer innovative AI applications.",
          "image": "/portfolio/Brain Wave project 10.png",
          "link": "https://brain-wave-pi.vercel.app/"
        },
      ]
    },
    {
      "category": "E-commerce & Retail",
      "projects": [
        {
          "title": "Glam Shack",
          "description": "An online store offering the latest fashion trends and accessories.",
          "image": "/portfolio/shoplify project 45.png",
          "link": "https://glam-shackk.vercel.app/"
        },
        {
          "title": "PriceWatch",
          "description": "Unlock business growth with intelligent analytics. Track product performance, boost conversions, and maximize customer retention. Self-serve platform delivers powerful insights for data-driven decisions. Perfect for startups and businesses aiming to optimize their market strategy and accelerate success",
          "image": "/portfolio/price watch project 11.png",
          "link": "https://scrapper-flax.vercel.app/"
        },
        {
          "title": "VQ Points",
          "description": "A loyalty program platform to manage and redeem points.",
          "image": "/portfolio/VQ Points 43.png",
          "link": "https://vqpoints.web.app/"
        },
        {
          "title": "Fashion",
          "description": "Offers a seamless shopping experience with featured products, easy navigation, detailed descriptions, and secure checkout.",
          "image": "/portfolio/Fashion  project 31 .png",
          "link": "https://objective-jennings-a2a6d7.netlify.app/"
        },
        {
          "title": "Hardcore Villani App",
          "description": "An e-commerce platform for various products.",
          "image": "/portfolio/Dhaka  E commerce app project 36.png",
          "link": "https://hardcore-villani-9d21cb.netlify.app/"
        },

      ]
    },
    {
      "category": "Travel & Hospitality",
      "projects": [
        {
          "title": "Kelly's Watersports",
          "description": "Kelly's Water Sports Jamaica: Your ultimate aquatic adventure hub. Dive into crystal waters with PADI-certified scuba, glide in clear kayaks, or sail on Hobie cats. From thrilling parasailing to serene glass-bottom boats, we offer unforgettable experiences for all. Your Caribbean water wonderland awaits!",
          "image": "/portfolio/kellyswatersports project 13.png",
          "link": "Kelly's – Water Sports"
        },
        {
          "title": "Caribbean Restaurant Association",
          "description": "Focused and dedicated to the enhancement and successes of the Caribbean culture in the food service industry in New York City.",
          "image": "/portfolio/Carrabin Restaurant Association  24.png",
          "link": "https://magnificent-fudge-f1bb30.netlify.app/"
        },
        {
          "title": "Swiss Swipe",
          "description": "Revolutionize your travel planning. Effortlessly organize activities and dream trips with lightning speed. Intuitive interface meets powerful algorithms for seamless itinerary creation. Perfect for busy professionals, travel enthusiasts, and businesses aiming to streamline vacation experiences. Adventure awaits—just swipe!",
          "image": "/portfolio/swiss swip project 14.png",
          "link": "https://dancing-tartufo-58eccc.netlify.app/"
        },
        {
          "title": "Resort Hotel Reservation",
          "description": "Elevate guest experiences with our React-powered Resort Hotel Reservation system. Sleek, responsive, and user-friendly, it streamlines bookings and maximizes occupancy. From real-time availability to secure payments, enhance your resort's digital presence. Delight guests and boost revenue with seamless, modern reservation management.",
          "image": "/portfolio/hotel reservation project  35.png",
          "link": "https://react-resort-hotel-reservation.netlify.app/"
        },
        {
          "title": "RoomRendezvous",
          "description": "Simplifying room reservations with seamless booking and tailored accommodations for every occasion.",
          "image": "/portfolio/RoomRendezvous project 19.png",
          "link": "https://delightful-strudel-21da81.netlify.app/"
        },
      ]
    },
    {
      "category": "Business Tools & Productivity",
      "projects": [
        {
          "title": "Documents Editor",
          "description": "DocuFlex is a powerful document editor with secure authentication, enabling users to upload, edit, and download any document type. Effortlessly share edited files online, providing a seamless experience for businesses to manage documentation with ease.",
          "image": "/portfolio/project 3 editing.png",
          "link": "https://documents-editor.vercel.app/sign-in"
        },
        {
          "title": "TechHireHub",
          "description": "Connecting businesses with top-tier technicians for expert solutions and reliable service.",
          "image": "/portfolio/TechHireHub project 20.png",
          "link": "https://idyllic-kitsune-b05596.netlify.app/login"
        },
        {
          "title": "Dashboard",
          "description": "Visualize success with our custom Dashboard solutions. Seamlessly integrating authentication and data visualization, our dashboards empower decision-makers with real-time insights. Transform complex data into actionable strategies, driving your business forward with clarity and confidence.",
          "image": "/portfolio/Dashboard project 28.png",
          "link": "https://peaceful-fermi-170007.netlify.app/#/dashboard"
        },
        {
          "title": "Upbeat Galileo App",
          "description": "Streamline organizational efficiency with our robust User Management Tool. Seamlessly handle user roles, permissions, and access controls. Automate onboarding, simplify audits, and enhance security. Customizable and scalable, it adapts to your evolving needs. Empower your HR and IT teams with intuitive user administration.",
          "image": "/portfolio/Upbeat Galileo App 38.png",
          "link": "https://upbeat-galileo-cfa75c.netlify.app/"
        },
        {
          "title": "Midalta Innovation",
          "description": "Midalta Innovation is a leading strategy and innovation firm. For nearly 10 years, they have helped create new businesses and reinvent existing ones.",
          "image": "/portfolio/Midalta Innovation project 18.png",
          "link": "https://xenodochial-saha-b77c1d.netlify.app/"
        },
        {
          "title": "Precious Salmiakki App",
          "description": "We transform ideas into reality. With over a decade of expertise, we offer FREE brand audits and long-term strategies to future-proof your success. Quality, support, and innovation — always.",
          "image": "/portfolio/project salmaiki project 16.png",
          "link": "https://precious-salmiakki-1517da.netlify.app/"
        },
      ]
    },
    {
      "category": "Education & Research",
      "projects": [
        {
          "title": "Caribbean Research Institute",
          "description": "Uncover insights into Caribbean-American experiences in New York. Multidisciplinary analysis of social, cultural, and economic dynamics. Compare immigrant journeys across American and European diasporas.",
          "image": "/portfolio/Carribean Research Center 2 project 16.png",
          "link": "https://sensational-treacle-a612bb.netlify.app/"
        },
        {
          "title": "Moc Interview",
          "description": "An educational platform for mock interviews and skill assessments.",
          "image": "/portfolio/project 44.png",
          "link": "https://moc-interview.vercel.app/"
        },
        {
          "title": "Religious Website",
          "description": "Elevate spiritual experiences with our Religious Content solutions. From interactive scripture apps to community engagement platforms, we blend technology with tradition.",
          "image": "/portfolio/Religious Website project 29.png",
          "link": "https://ivabraham.netlify.app/"
        },
      ]
    },
    {
      "category": "Entertainment & Media",
      "projects": [
        {
          "title": "Events App",
          "description": "EventFlow is your all-in-one event management app, designed to streamline scheduling, reminders, and real-time updates.",
          "image": "/portfolio/poject 5 evently.png",
          "link": "https://events-theta-eight.vercel.app/"
        },
        {
          "title": "Poker Game",
          "description": "Sharpen Your Bluff Online Poker for All Levels.",
          "image": "/portfolio/poker game project 22 .png",
          "link": "https://cerulean-boba-8706a2.netlify.app/login"
        },
        {
          "title": "Black Forest Artz",
          "description": "An online art gallery showcasing various artworks.",
          "image": "/portfolio/art galley 40.png",
          "link": "https://black-forest-artz.web.app/"
        },
      ]
    },
    {
      "category": "Healthcare & Community",
      "projects": [
        {
          "title": "Healthcare App",
          "description": "Empowering wellness through technology. Secure patient data, appointment scheduling, and telemedicine integration. Real-time health tracking and personalized insights. Ideal for healthcare providers and patients seeking a seamless, user-friendly digital health experience. Transform care delivery with our innovative solution",
          "image": "/portfolio/project 9 care plus.png",
          "link": "https://healthcare-tan.vercel.app/"
        },
        {
          "title": "Jaya",
          "description": "JAYA connects Jamaicans abroad to empower Jamaicans at home.",
          "image": "/portfolio/Jaya project 25.png",
          "link": "https://dazzling-almeida-b28d62.netlify.app/"
        },
        {
          "title": "Minister of Agriculture and Fisheries",
          "description": "Minister Pearnel Charles, Jr., MP: Leading Agriculture and Fisheries, with prior roles in Housing and Environment.",
          "image": "/portfolio/MINISTER OF AGRICULTURE AND FISHERIES project 17.png",
          "link": "https://stunning-gumption-a3f080.netlify.app/"
        },
      ]
    }
  ]


  const [activeTab, setActiveTab] = useState("Finance & Accounting");

  // Create a list of unique categories including "All"
  const categories = [...portfolioData.map((data) => data.category)];

  // Function to get projects based on active tab
  const getProjects = () => {
    if (activeTab === "All") {
      // Merge all projects into one array
      return portfolioData.flatMap((data) => data.projects);
    } else {
      const categoryData = portfolioData.find(
        (data) => data.category === activeTab
      );
      return categoryData ? categoryData.projects : [];
    }
  };

  return (
    <section className="portfolio bg-dark ptb-120">
      <div className="container">
        {/* Section Heading */}
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-heading text-center">
              <h2>Our Portfolio</h2>
              <p>
                Credibly grow premier ideas rather than bricks-and-clicks
                strategic theme areas distributed for stand-alone web-readiness.
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12">
            <div className="tab-button mb-5">
              <ul
                className="nav nav-pills d-flex justify-content-center"
                id="pills-tab"
                role="tablist"
              >
                {categories.map((category, index) => (
                  <li className="nav-item" role="presentation" key={index}>
                    <button
                      className={`nav-link ${activeTab === category ? "active" : ""
                        }`}
                      onClick={() => setActiveTab(category)}
                      type="button"
                      role="tab"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tab Content */}
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              role="tabpanel"
              aria-labelledby="pills-all-tab"
            >
              <div className="portfolio-listing-home">
                {getProjects().map((project, id) => (
                  <PortfolioCard
                    key={id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioTab;