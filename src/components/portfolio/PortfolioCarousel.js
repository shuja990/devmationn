import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const portfolioItems = [
    {
        title: 'Project One',
        description: 'Description for project one.',
        image: '/portfolio/320.png',
        link: 'https://example.com/project-one',
    },
    {
        title: 'Project Two',
        description: 'Description for project two.',
        image: '/portfolio/260.png',
        link: 'https://example.com/project-two',
    },
    {
        title: 'Project Three',
        description: 'Description for project three.',
        image: '/portfolio/240.png',
        link: 'https://example.com/project-three',
    },
    {
        title: 'Project Four',
        description: 'Description for project four.',
        image: '/portfolio/200.png',
        link: 'https://example.com/project-four',
    },
];

const PortfolioCarousel = ({title}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="portfolio-section">
            <h2 className="section-title">{title}</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView="auto"
                fadeEffect={true}
                flipEffect={true}
            >
                {portfolioItems.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        onMouseOver={() => setActiveIndex(index)}
                        onMouseOut={() => setActiveIndex(null)}
                        onTouchStart={() => setActiveIndex(index)}
                        className={`portfolio-item ${activeIndex === index ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <div className="portfolio-desc">
                            <h3 className="portfolio-title">{item.title}</h3>
                            <p className="portfolio-text">{item.description}</p>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-button">
                                Visit Site
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default PortfolioCarousel;
