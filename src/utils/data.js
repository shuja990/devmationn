import {
  BiServer,
  BiNews,
  BiDetail,
  BiRocket,
  BiPaperPlane,
  BiHelpCircle,
  BiLogIn,
  BiUser,
  BiError,
} from 'react-icons/bi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { BsHeadset } from 'react-icons/bs';
import { FaLaptopCode, FaRegClock, FaRegTrashAlt } from 'react-icons/fa';

const IconBoxData = [
  {
    id: 1,
    classOption: 'bg-primary',
    icon: 'fal fa-layer-group fa-2x text-white',
    title: 'Good Performance',
    description:
      'Appropriately grow competitive leadership rather than strategic technically sound processes without state .',
  },
  {
    id: 2,
    classOption: 'bg-danger',
    icon: 'fal fa-shield-check fa-2x text-white',
    title: 'Highly Secure',
    description:
      'Appropriately grow competitive leadership rather than strategic technically sound processes without state.',
  },
  {
    id: 3,
    classOption: 'bg-dark',
    icon: 'fal fa-code fa-2x text-white',
    title: 'Fast Development',
    description:
      'Appropriately grow competitive leadership rather than strategic technically sound processes without state.',
  },
];
const FaqOneData = [
  {
    id: 1,
    faqTitle: 'How does back pricing work?',
    faqDesc:
      'Progressively e-enable collaborative inexpensive supply chains. Efficiently maintain economically methods of empowerment for synergistic sound scenarios.',
  },
  {
    id: 2,
    faqTitle: 'How do I calculate how much price?',
    faqDesc:
      'Globally benchmark customized mindshare before clicks-and-mortar partnerships. Efficiently maintain economically sound scenarios and whereas client-based progressively.',
  },
  {
    id: 3,
    faqTitle: 'Can you show me an example?',
    faqDesc:
      'Dynamically visualize whereas competitive relationships. Progressively benchmark customized partnerships generate interdependent benefits rather sound scenarios and robust alignments.',
  },
];

const TestimonialData = [
  {
    id: 1,
    authorImg: '/testimonial/1.jpg',
    authorName: 'Mr.Rupan Oberoi',
    authorTitle: 'Founder and CEO at Amaara Herbs',
    quoteTitle: 'The Best Template You Got to Have it!',
    authorQuote:
      'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media than ethical',
  },
  {
    id: 2,
    authorImg: '/testimonial/2.jpg',
    authorName: 'Joan Dho',
    authorTitle: 'Founder and CTO',
    quoteTitle: 'Best Template for SAAS Company!',
    authorQuote:
      'Dynamically create innovative core competencies with effective best practices promote innovative infrastructures.',
  },
  {
    id: 3,
    authorImg: '/testimonial/3.jpg',
    authorName: 'Ranu Mondal',
    authorTitle: 'Lead Developer',
    quoteTitle: 'It is undeniably good!',
    authorQuote:
      'Rapidiously supply client-centric e-markets and maintainable processes progressively engineer',
  },
  {
    id: 4,
    authorImg: '/testimonial/4.jpg',
    authorName: 'Mr.Rupan Oberoi',
    authorTitle: 'Founder and CEO at Amaara Herbs',
    quoteTitle: 'The Best Template You Got to Have it!',
    authorQuote:
      'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media than ethical',
  },
];

const TestimonialOneData = [
  {
    id: '#testimonial-tab-1',
    activeClass: 'active',
    title: 'The Best Template You Got to Have it!',
    desc: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    authorName: 'Joe Richard',
    authorDesn: 'Visual Designer',
    authorThumb: '/testimonial/t-1.jpg',
    authorAvatar: '/testimonial/1.jpg',
  },
  {
    id: '#testimonial-tab-2',
    title: 'Embarrassed by the First Version.',
    desc: 'Energistically streamline robust architectures whereas distributed mindshare. Intrinsicly leveraother backend growth strategies through 24/365 products. Conveniently pursue revolutionary communities for compelling process improvements.',
    authorName: 'Rupan Oberoi',
    authorDesn: 'Web Designer',
    authorThumb: '/testimonial/t-2.jpg',
    authorAvatar: '/testimonial/2.jpg',
  },
  {
    id: '#testimonial-tab-3',
    title: 'The Best Template You Got to Have it!',
    desc: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    authorName: 'Joe Richard',
    authorDesn: 'Visual Designer',
    authorThumb: '/testimonial/t-3.jpg',
    authorAvatar: '/testimonial/3.jpg',
  },
  {
    id: '#testimonial-tab-4',
    title: 'The Best Template You Got to Have it!',
    desc: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    authorName: 'Joe Richard',
    authorDesn: 'Visual Designer',
    authorThumb: '/testimonial/t-4.jpg',
    authorAvatar: '/testimonial/4.jpg',
  },
  {
    id: '#testimonial-tab-5',
    title: 'The Best Template You Got to Have it!',
    desc: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    authorName: 'Joe Richard',
    authorDesn: 'Visual Designer',
    authorThumb: '/testimonial/t-5.jpg',
    authorAvatar: '/testimonial/5.jpg',
  },
];

const registerTestimonial = [
  {
    active: 'active show',
    target: 'testimonial-tab-1',
    header: 'The Best Template You Got to Have it!',
    info: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global.',
    name: 'Joe Richard',
    title: 'Visual Designer',
  },
  {
    target: 'testimonial-tab-2',
    header: 'Amazing DevMations template!',
    info: 'Distinctively engineer client-centered information. Progressively customize client-centered repurpose viral e-services whereas before 24/7 total linkage.',
    name: 'Oberoi R.',
    title: 'CEO at Herbs',
  },
  {
    target: 'testimonial-tab-3',
    header: 'Embarrassed by the First Version!',
    info: ' Efficiently whiteboard cross-unit meta-services. Quickly transition standardized schemas via leveraged users. Assertively actualize mission-critical supply chains through.',
    name: 'Joan Dho',
    title: 'Founder and CTO',
  },
];
const registerTestimonialTarget = [
  {
    active: 'active',
    target: '#testimonial-tab-1',
    image: '/testimonial/1.jpg',
  },
  {
    target: '#testimonial-tab-2',
    image: '/testimonial/2.jpg',
  },
  {
    target: '#testimonial-tab-3',
    image: '/testimonial/3.jpg',
  },
];

///footer data
const footerPrimaryPages = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '/about-us',
  },
  {
    title: 'Services',
    href: '/services',
  },
  {
    title: 'Career',
    href: '/career',
  },
  {
    title:"Contact Us",
    href: '/contact-us',
  }
];

const footerPages = [
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'Blog',
    href: '/blogs',
  },
  {
    title: 'Blog Details',
    href: '/blog-single',
  },
  {
    title: 'Contact',
    href: '/contact-us',
  },
];
const footerTemplate = [
  {
    title: 'Contact',
    href: '/contact-us',
  },
  {
    title: 'Request for Demo',
    href: '/request-demo',
  },
  {
    title: 'Blogs',
    href: '/blogs',
  },
];

//navbar data
const navHomeOne = [
  {
    title: 'Web App Development',
    info: "Build custom web apps that grow your business. ",
    href: 'web-app-development',
  },
  {
    title: 'Mobile Application Development',
    info: 'Create modern mobile apps that engage your users. ',
    href: 'mobile-app-development',
  },
  {
    title: 'Wordpress Development',
    info: 'Design high-converting landing pages for your software.',
    href: 'wordpress-development',
  },
  {
    title: 'AI and Machine Learning Solutions',
    info: 'Unlock powerful AI to automate tasks and gain insights.',
    href: 'ai-and-machine-learning-solutions',
  },
  {
    title: 'Cloud and DevOps Solutions',
    info: 'Simplify development & deployment for faster innovation.',
    href: 'cloud-and-devops-solutions',
  },
];

const navHomeTwo = [
  {
    title: 'Shopify Development',
    info: 'Build beautiful and functional Shopify stores that sell.',
    href: 'shopify-development',
  },
  {
    title: 'UI/UX Design',
    info: 'Craft user-friendly interfaces that delight your customers.',
    href: 'ui-ux-design',
  },
  {
    title: 'Blockchain Development',
    info: 'Develop secure and transparent applications that build trust',
    href: 'blockchain-development',
  },
  {
    title: 'MVP Development',
    info: 'Launch your minimum viable product quickly and test your idea.',
    href: 'mvp-development',
  },
  {
    title: 'Data Entry',
    info: 'Accurate and efficient data entry solutions to streamline your business operations.',
    href: 'coming-soon',
  },
];

//Offcanvas Menu
const offcanvasMenuData = [
  {
    title: 'Sass Company 1',
    info: "It's for SaaS Software Company",
    href: '/',
  },
  {
    title: 'Sass Company 2',
    info: ' Modern Sass agency',
    href: 'sass-company-two',
  },
  {
    title: 'Desktop App',
    info: 'Web Software Company',
    href: 'desktop-app',
  },

  {
    title: 'App Landing',
    info: ' App and Software Landing',
    href: 'app-landing',
  },
  {
    title: 'Software Application',
    info: 'IT solutions and SaaS Application',
    href: 'software-application',
  },
  {
    title: 'Startup Agency',
    info: 'Different type of Agency',
    href: 'startup-agency',
  },
  {
    title: 'Data Analysis',
    info: ' Software & Data Analysis',
    href: 'data-analysis',
  },
  {
    title: 'App Landing Two',
    info: 'Software & Data Analysis',
    href: 'app-landing-two',
  },
  {
    title: 'IT Solution',
    info: 'IT Solution and Sass Application',
    href: 'it-solution',
  },
  {
    title: 'Cyber Security',
    info: 'Cyber Security Landing Page',
    href: 'cyber-security',
  },
  {
    title: 'Crypto Currency',
    info: 'Crypto Currency Landing Page',
    href: 'crypto-currency',
  },
  {
    title: 'Game Solution',
    info: 'Crypto Server Landing Page',
    href: 'game-solution',
  },
  {
    title: 'Payment Gatway',
    info: 'Payment Landing Page',
    href: 'payment-gateway',
  },
];

const navCompanyLinks = [
  {
    title: 'Contact Us',
    icon: <BiLogIn />,
    href: 'contact-us',
  },
  {
    title: 'Service Single',
    icon: <BiServer />,
    href: 'single-service',
  },
  {
    title: 'Our Latest News',
    icon: <BiNews />,
    href: 'blogs',
  },
  {
    title: 'News Details',
    icon: <BiDetail />,
    href: 'blog-single',
  },
  {
    title: 'Career',
    icon: <HiOutlineAcademicCap />,
    href: 'career',
  },
  {
    title: 'Career Single',
    icon: <HiOutlineAcademicCap />,
    href: 'career-single',
  },
  {
    title: 'Integrations',
    icon: <BiRocket />,
    href: 'integrations',
  },
  {
    title: 'Integrations Single',
    icon: <BiPaperPlane />,
    href: 'integration-single',
  },
];

const navCompanyPage = [
  {
    title: 'Help Center',
    icon: <BiHelpCircle />,
    href: 'help-center',
  },
  {
    title: 'Help Details',
    icon: <BsHeadset />,
    href: 'help-center-single',
  },
  {
    title: 'Request for Demo',
    icon: <FaLaptopCode />,
    href: 'request-demo',
  },
  {
    title: 'User Login',
    icon: <BiLogIn />,
    href: 'login',
  },
  {
    title: 'User SignUp',
    icon: <BiUser />,
    href: 'register',
  },
  {
    title: 'Recovery Account',
    icon: <FaRegTrashAlt />,
    href: 'password-reset',
  },
  {
    title: '404 Page',
    icon: <BiError />,
    href: '404',
  },
  {
    title: 'Coming Soon',
    icon: <FaRegClock />,
    href: 'coming-soon',
  },
];

//
const testimonialAuthor = [
  {
    name: 'Joe Richard',
    title: 'Visual Designer',
    image: '/testimonial/1.jpg',
    target: '#testimonial-tab-1',
  },
  {
    name: 'Rupan Oberoi',
    title: 'Web Designer',
    image: '/testimonial/2.jpg',
    target: '#testimonial-tab-2',
  },
  {
    name: 'Jon Doe',
    title: 'Software Engineer',
    image: '/testimonial/3.jpg',
    target: '#testimonial-tab-3',
  },
  {
    name: 'Hanry Luice',
    title: 'App Developer',
    image: '/testimonial/4.jpg',
    target: '#testimonial-tab-4',
  },
  {
    name: 'Ami Nijai',
    title: 'Customer Support',
    image: '/testimonial/5.jpg',
    target: '#testimonial-tab-5',
  },
];

const testimonialOne = [
  {
    name: 'Joe Richard',
    title: 'Visual Designer',
    header: 'The Best Template You Got to Have it!',
    description:
      ' Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    image: '/testimonial/t-1.jpg',
    target: 'testimonial-tab-1',
    active: 'active show',
  },
  {
    name: 'Rupan Oberoi',
    title: 'Web Designer',
    header: 'The Best Template You Got to Have it!',
    description:
      ' Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    image: '/testimonial/t-2.jpg',
    target: 'testimonial-tab-2',
  },
  {
    name: 'Jon Doe',
    title: 'Software Engineer',
    header: 'The Best Template You Got to Have it!',
    description:
      ' Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    image: '/testimonial/t-3.jpg',
    target: 'testimonial-tab-3',
  },
  {
    name: 'Hanry Luice',
    title: 'App Developer',
    header: 'The Best Template You Got to Have it!',
    description:
      ' Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    image: '/testimonial/t-4.jpg',
    target: 'testimonial-tab-4',
  },
  {
    name: 'Ami Nijai',
    title: 'Customer Support',
    header: 'The Best Template You Got to Have it!',
    description:
      ' Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
    image: '/testimonial/t-5.jpg',
    target: 'testimonial-tab-5',
  },
];

//pricing data
const pricingData = [
  {
    title: 'Stater',
    price: '$25',
    time: '/month',
    bgColor: 'bg-white',
    textColor: 'text-primary',
    btnColor: 'btn-outline-primary',
    shape: 'left--40 bottom--40',
    listItem: [
      {
        li: '1 Team',
      },
      {
        li: '1 Installed Agent',
      },
      {
        li: 'Real-Time Feedback',
      },
      {
        li: 'Video Dedicated Support',
      },
      {
        li: 'Attacked Targets Per Month',
      },
      {
        li: 'Team Collaboration Tools',
      },
      {
        li: 'Automated Updated Features',
      },
      {
        li: '24/7 Life time Support',
      },
    ],
  },

  {
    title: 'Advanced',
    price: '$45',
    time: '/month',
    bgColor: 'bg-gradient',
    textColor: 'text-warning',
    btnColor: 'btn-primary',

    listItem: [
      {
        li: '5 Team',
      },
      {
        li: '3 Installed Agent',
      },
      {
        li: 'Real-Time Feedback',
      },
      {
        li: 'Video Dedicated Support',
      },
      {
        li: '24 Attacked Targets Per Month',
      },
      {
        li: 'Team Collaboration Tools',
      },
      {
        li: 'Automated Updated Features',
      },
      {
        li: '24/7 Life time Support',
      },
    ],
  },

  {
    title: 'Premium',
    price: '$75',
    time: '/month',
    bgColor: 'bg-white',
    textColor: 'text-primary',
    btnColor: 'btn-outline-primary',
    shape: 'right--40 top--40',
    listItem: [
      {
        li: '6 Team',
      },
      {
        li: '8 Installed Agent',
      },
      {
        li: 'Real-Time Feedback',
      },
      {
        li: 'Video Dedicated Support',
      },
      {
        li: '40 Attacked Targets Per Month',
      },
      {
        li: 'Team Collaboration Tools',
      },
      {
        li: 'Automated Updated Features',
      },
      {
        li: '24/7 Life time Support',
      },
    ],
  },
];

//integration data
const integrationOneRight = [
  {
    image: '/integations/7.png',
    className: 'integration-7',
  },
  {
    image: '/integations/8.png',
    className: 'integration-8',
  },
  {
    image: '/integations/9.png',
    className: 'integration-9',
  },
  {
    image: '/integations/10.png',
    className: 'integration-10',
  },
  {
    image: '/integations/11.png',
    className: 'integration-11',
  },
  {
    image: '/integations/12.png',
    className: 'integration-12',
  },
];

const integrationFeature = [
  {
    logo: '/integations/1.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/2.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/3.png',
    type: 'Advanced',
    class: 'bg-success-soft text-success',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/4.png',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/5.png',
    type: 'Popular',
    class: 'bg-primary-soft text-primary',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/6.png',
    type: 'Basic',
    class: 'bg-danger-soft text-danger',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/7.png',
    type: 'Free',
    class: 'bg-warning-soft text-warning',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/8.png',
    type: 'Advanced',
    class: 'bg-success-soft text-success',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
  {
    logo: '/integations/9.png',
    type: 'Premium',
    class: 'bg-warning-soft text-warning',
    title: 'Google Drive',
    info: 'Globally engage tactical niche markets rather than client-based competently generate unique e-services',
  },
];

const integrationOneLeft = [
  {
    image: '/integations/1.png',
    className: 'integration-1',
  },
  {
    image: '/integations/2.png',
    className: 'integration-2',
  },
  {
    image: '/integations/3.png',
    className: 'integration-3',
  },
  {
    image: '/integations/4.png',
    className: 'integration-4',
  },
  {
    image: '/integations/5.png',
    className: 'integration-5',
  },
  {
    image: '/integations/6.png',
    className: 'integration-6',
  },
];

//ourTeam data
const ourTeam = [
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-1.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-2.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-3.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-4.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-5.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-6.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-7.jpg',
  },
  {
    name: 'John Sullivan',
    title: 'Front End Developer',
    image: '/team/team-8.jpg',
  },
];

//blog data
const blogFeatureData = [
  {
    image: '/blog/blog-1.jpg',
    type: 'Design',
    header: 'Do you really understand the concept of product value?',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/6.jpg',
    author: 'Jane Martin',
    data: 'April 24, 2021',
    class: 'bg-warning-soft',
  },
  {
    image: '/blog/blog-2.jpg',
    type: 'Customer',
    header: 'Why communities help you build better products for your business',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the  other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/1.jpg',
    author: 'Veronica P. Byrd',
    data: 'April 24, 2021',
    class: 'bg-primary-soft',
  },
  {
    image: '/blog/blog-3.jpg',
    type: 'Development',
    header: 'Why communities help you build better products',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/3.jpg',
    author: 'Martin Gilbert',
    data: 'May 20, 2021',
    class: 'bg-danger-soft',
  },
  {
    image: '/blog/blog-4.jpg',
    type: 'Marketing',
    header: 'The role of product ops in successful distributed teams',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/4.jpg',
    author: 'Raymond H. Martin',
    data: 'June 10, 2021',
    class: 'bg-primary-soft',
  },
  {
    image: '/blog/blog-5.jpg',
    type: 'UI/UX',
    header: 'The modern product manager’s tech stack',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/5.jpg',
    author: 'Luthar Martin',
    data: 'July 24, 2021',
    class: 'bg-warning-soft',
  },
  {
    image: '/blog/blog-6.jpg',
    type: 'Management',
    header: '30 product management thought leaders to follow',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/6.jpg',
    author: 'Donna Martin',
    data: 'August 25, 2021',
    class: 'bg-danger-soft',
  },
  {
    image: '/blog/blog-7.jpg',
    type: 'Design',
    header: 'New analyst report: Digital product management tools and tech',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/1.jpg',
    author: 'Donna R. Book',
    data: 'September 24, 2021',
    class: 'bg-danger-soft',
  },
  {
    image: '/blog/blog-8.jpg',
    type: 'Development',
    header: 'A frank discussion about diversity, inclusion, and allyship',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/3.jpg',
    author: 'Donna R. Martin',
    data: 'October 24, 2021',
    class: 'bg-primary-soft',
  },
  {
    image: '/blog/blog-9.jpg',
    type: 'Design',
    header: '4 steps for measuring the impact of product discovery',
    info: 'Society is fragmenting into two parallel realities. In one reality, you have infinite upside and opportunity. In the other reality, you’ll continue to see the gap between your standard of living and those at the top grow more and more.',
    profilePic: '/testimonial/2.jpg',
    author: 'Martin Luthar',
    data: 'November 24, 2021',
    class: 'bg-warning-soft',
  },
];

//career data
const careerJobCard = [
  {
    type: 'Remote - Full Time',
    position: 'Developer',
    title: 'Full Stack Developer',
    className: 'bg-primary-soft text-primary',
    listItem: [
      {
        media: 'Google',
        location: 'Remote - Worldwide',
        salary: '$35-$45k',
      },
    ],
    slug: "full-stack-engineer"
  },
  {
    type: 'Remote - Full Time',
    position: 'Developer',
    title: 'Mobile Application Developer',
    className: 'bg-danger-soft text-danger',
    listItem: [
      {
        media: 'Figma',
        location: 'Remote - Worldwide',
        salary: '$25-$35k',
      },
    ],
    slug: "mobile-app-developer"
  },
  {
    type: 'Full Time',
    position: 'Developer',
    title: 'AI and Machine Learning Developer',
    className: 'bg-success-soft text-success',
    listItem: [
      {
        media: 'Dribble',
        location: 'Remote - Worldwide',
        salary: '$55-$65k',
      },
    ],
    slug: 'ai-machine-learning-engineer'
  },
  {
    type: 'Remote',
    position: 'Developer',
    title: 'Blochchain Developer',

    listItem: [
      {
        media: 'Slack',
        location: 'Remote - Worldwide',
        salary: '$55-$62k',
      },
    ],
    slug: "blochchain-developer"
  },
  {
    type: 'Remote',
    position: 'Developer',
    title: 'DevOps and Cloud Engineer',

    listItem: [
      {
        media: 'Slack',
        location: 'Remote - Worldwide',
        salary: '$55-$62k',
      },
    ],
    slug: "devops-cloud-engineer"
  },
  {
    type: 'Remote',
    position: 'Developer',
    title: 'Wordpress and Shopify Developer',

    listItem: [
      {
        media: 'Slack',
        location: 'Remote - Worldwide',
        salary: '$55-$62k',
      },
    ],
    slug: "wordpress-shopify-developer"
  },
];

//help center data
const helpCenterFaqDetails = [
  {
    title: 'All Support Articles',
    target: 'support-tab-1',
    class: 'show active',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },

  {
    title: 'Payments Query',
    target: 'support-tab-2',
    listItem: [
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical with high standards in e-markets. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },

  {
    title: 'Setup or Installment',
    target: 'support-tab-3',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Technical Support',
    target: 'support-tab-4',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Retailers & Customer',
    target: 'support-tab-5',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Security Issues',
    target: 'support-tab-6',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Brand Creation',
    target: 'support-tab-7',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
  {
    title: 'Legal Support',
    target: 'support-tab-8',
    listItem: [
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you have any local branches?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What do I need to create an account?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Are you open for new podcast guests?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'When is the upcoming annual event?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What is the monthly cost of your app?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'Do you offer refunds for the subscriptions?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What’s inside the Facebook community?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'How often is there a subscribers stream?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
      {
        header: 'What certifications does Agency has?',
        desc: 'Credibly evisculate mission-critical products before quality e-services. Intrinsicly evisculate e-business best practices productivate standardized convergence...',
        href: '/help-center-single',
      },
    ],
  },
];

//desktop app integration two
const brandName = [
  {
    image: '/integations/airbnb.png',
    brand: 'Airbnb',
  },
  {
    image: '/integations/figma.png',
    brand: 'Figma',
  },
  {
    image: '/integations/facebook.png',
    brand: 'Facebook',
  },
  {
    image: '/integations/sales-force.png',
    brand: 'Sales Force',
  },
  {
    image: '/integations/atlassian.png',
    brand: 'Atlassion',
  },
  {
    image: '/integations/dropbox-2.png',
    brand: 'Dropbox',
  },
  {
    image: '/integations/dynamic-365.png',
    brand: 'Dynamic-365',
  },
  {
    image: '/integations/erecruiter.png',
    brand: 'Erecruiter',
  },
  {
    image: '/integations/evernote.png',
    brand: 'Evernote',
  },
  {
    image: '/integations/google-icon.png',
    brand: 'Google',
  },
  {
    image: '/integations/slack.png',
    brand: 'Slack',
  },
  {
    image: '/integations/google-analytics.png',
    brand: 'Google Analytics',
  },
  {
    image: '/integations/google-drive.png',
    brand: 'Google Drive',
  },
  {
    image: '/integations/hubspot.png',
    brand: 'Hubspot',
  },
  {
    image: '/integations/instagram.png',
    brand: 'Instagram',
  },
  {
    image: '/integations/linkedin.png',
    brand: 'Linkedin',
  },
  {
    image: '/integations/mailchimp.png',
    brand: 'Mailchimp',
  },
  {
    image: '/integations/marekto.png',
    brand: 'Merekto',
  },
];
//Service IT
const ItServiceData = [
  {
    serviceImg: '/service/coding.png',
    serviceTitle: 'Web Development',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-bottom border-end',
  },
  {
    serviceImg: '/service/app-development.png',
    serviceTitle: 'App Development',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-bottom border-end',
  },
  {
    serviceImg: '/service/shield.png',
    serviceTitle: 'Data Security',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-bottom',
  },
  {
    serviceImg: '/service/curve.png',
    serviceTitle: 'UI/UX Development',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-end',
  },
  {
    serviceImg: '/service/graphic-design.png',
    serviceTitle: 'Graphics Design',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: 'border-end',
  },
  {
    serviceImg: '/service/promotion.png',
    serviceTitle: 'Digital Marketing',
    serviceDesc:
      'There are many variations of the passages of Lorem Ipsum is an available the done.',
    className: '',
  },
];
const testimonialFourData = [
  {
    quoate:
      'You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.',
    authorAvatar: '/testimonial/app-testimonial-1.png',
    authorName: 'Noah L. Paulsen',
    quoateDate: 'Feb 19, 2022',
  },
  {
    quoate:
      'You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.',
    authorAvatar: '/testimonial/app-testimonial-2.png',
    authorName: 'Noah L. Paulsen',
    quoateDate: 'Feb 19, 2022',
  },
  {
    quoate:
      'You don’t have to be constantly searching the web to get price updates. Just use our coin calculator and simply get the desired result with a simple click.',
    authorAvatar: '/testimonial/app-testimonial-3.png',
    authorName: 'Ariya Stark',
    quoateDate: 'June 24, 2022',
  },
];
const cryptoBlogData = [
  {
    blogThumb: '/cbl-1.png',
    blogTitle: 'How Filecoin is Up in a Week Could Take Care',
    blogExerpt:
      'Words combined with a handful of model to generate which looks reasonable.',
    authorAvatar: '/testimonial/app-testimonial-1.png',
    authorName: 'St Adward',
    postDate: 'Feb 19, 2022',
  },
  {
    blogThumb: '/cbl-2.png',
    blogTitle: 'How Filecoin is Up in a Week Could Take Care',
    blogExerpt:
      'Words combined with a handful of model to generate which looks reasonable.',
    authorAvatar: '/testimonial/app-testimonial-2.png',
    authorName: 'St Adward',
    postDate: 'Feb 19, 2022',
  },
  {
    blogThumb: '/cbl-3.png',
    blogTitle: 'How Filecoin is Up in a Week Could Take Care',
    blogExerpt:
      'Words combined with a handful of model to generate which looks reasonable.',
    authorAvatar: '/testimonial/app-testimonial-3.png',
    authorName: 'St Adward',
    postDate: 'Feb 19, 2022',
  },
];
const cyberBlogData = [
  {
    blogThumb: '/blog/c-blog-1.jpg',
    postAuthor: 'Admin',
    postDate: 'April 25, 2022',
    title: 'The Steps to GainingPrivileged Access Security',
    linkText: 'Read more',
  },
  {
    blogThumb: '/blog/c-blog-2.jpg',
    postAuthor: 'Admin',
    postDate: 'April 25, 2022',
    title: 'Protect Your Workplace FromCyber Attacks',
    linkText: 'Read more',
  },
  {
    blogThumb: '/blog/c-blog-3.jpg',
    postAuthor: 'Admin',
    postDate: 'April 25, 2022',
    title: 'Mid-Market Businesses, Don’tSmall about Security',
    linkText: 'Read more',
  },
];
export {
  offcanvasMenuData,
  cyberBlogData,
  cryptoBlogData,
  testimonialFourData,
  ItServiceData,
  IconBoxData,
  FaqOneData,
  TestimonialData,
  TestimonialOneData,
  registerTestimonial,
  registerTestimonialTarget,
  navHomeOne,
  navHomeTwo,
  navCompanyLinks,
  navCompanyPage,
  footerPrimaryPages,
  footerPages,
  footerTemplate,
  testimonialOne,
  testimonialAuthor,
  pricingData,
  integrationOneLeft,
  integrationOneRight,
  integrationFeature,
  ourTeam,
  blogFeatureData,
  careerJobCard,
  helpCenterFaqDetails,
  brandName,
};
