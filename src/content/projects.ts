/**
 * The real projects. Most were carried over from the previous site.
 *
 * These are the only genuine proof on the site: every `href` is a live
 * deployment and every image is a real screenshot. Descriptions have been
 * rewritten from the old marketing voice into plain statements of what was
 * built -- but no project, link or capability here is invented.
 *
 * `service` maps each project to a slug in services.ts (primary filter);
 * `industry` is the secondary facet, carried over from the old categories.
 */

export type Project = {
  slug: string;
  title: string;
  description: string;
  image: string;
  /** Live deployment. `null` where the original record had no working URL. */
  href: string | null;
  service: string;
  industry: string;
  stack: string[];
};

export const industries = [
  'Finance',
  'AI & ML',
  'E-commerce',
  'Travel & Hospitality',
  'Business Tools',
  'Education',
  'Media',
  'Healthcare',
] as const;

export const projects: Project[] = [
  {
    slug: 'lifepilot',
    title: 'LifePilot',
    description:
      'A multi-agent planning assistant. You describe a goal in plain language and specialised agents research it, cost it and put it in order — then it stops for your approval before anything is actually booked or paid for.',
    image: '/portfolio/lifepilot.png',
    href: 'https://lifepilot-web.onrender.com/',
    service: 'ai-agents-rag',
    industry: 'AI & ML',
    stack: ['Multi-agent orchestration', 'Tool use', 'Human-in-the-loop', 'Next.js'],
  },
  {
    slug: 'f1-rag-chatbot',
    title: 'F1GPT',
    description:
      'A Formula 1 assistant that answers from current race data — standings, regulations, driver and circuit history — rather than from a model’s training cut-off. Retrieval over a domain that changes every race weekend, with accounts and per-user rate limiting.',
    image: '/portfolio/f1-rag-chatbot.png',
    href: 'https://f1-rag-chatbot.vercel.app/',
    service: 'ai-agents-rag',
    industry: 'AI & ML',
    stack: ['Next.js', 'RAG', 'Vector search', 'Streaming', 'Auth'],
  },
  {
    slug: 'banking-app',
    title: 'FinX Banking',
    description:
      'A personal banking product with Plaid account linking and Dwolla transfers, covering multi-account balances, transaction history and bank-to-bank payments.',
    image: '/portfolio/banking-app.png',
    href: 'https://banking-theta-six.vercel.app/sign-in',
    service: 'web-app-development',
    industry: 'Finance',
    stack: ['Next.js', 'Plaid', 'Dwolla', 'TypeScript'],
  },
  {
    slug: 'i-conta',
    title: 'I-CONTA',
    description:
      'An accounting and tax consulting platform where clients upload documents, view their financial position and run tax calculations without waiting on their accountant.',
    image: '/portfolio/i-conta.png',
    href: 'https://reliable-douhua-a0cd31.netlify.app/',
    service: 'web-app-development',
    industry: 'Finance',
    stack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    slug: 'invoice-generator',
    title: 'Invoice Generator',
    description:
      'A configurable invoicing tool with customisable templates and automatic line-item and tax calculation, built to adapt to different billing models.',
    image: '/portfolio/invoice-generator.png',
    href: 'https://invoice-generator-shuja.netlify.app/',
    service: 'web-app-development',
    industry: 'Finance',
    stack: ['React', 'PDF generation'],
  },
  {
    slug: 'devmations-ai',
    title: 'DevMations AI',
    description:
      'A retrieval-backed assistant that answers questions from a business knowledge base in real time, built as our own reference implementation of a production RAG stack.',
    image: '/portfolio/devmations-ai.png',
    href: 'https://ai.devmations.com/',
    service: 'ai-agents-rag',
    industry: 'AI & ML',
    stack: ['Next.js', 'OpenAI', 'Vector search', 'Streaming'],
  },
  {
    slug: 'backdrop-ai',
    title: 'Backdrop AI',
    description:
      'An image editing tool with generative fill, object removal, background replacement and recolouring, behind authenticated per-user workspaces.',
    image: '/portfolio/backdrop-ai.png',
    href: 'https://backdrop-ai.vercel.app/',
    service: 'ai-agents-rag',
    industry: 'AI & ML',
    stack: ['Next.js', 'Cloudinary AI', 'Clerk'],
  },
  {
    slug: 'podcast-ai',
    title: 'Podcast AI',
    description:
      'A podcast platform with AI text-to-audio generation, streaming playback and discovery, letting creators produce episodes without recording.',
    image: '/portfolio/podcast-ai.png',
    href: 'https://podcast-ai-hazel.vercel.app/',
    service: 'ai-content-evaluation',
    industry: 'Media',
    stack: ['Next.js', 'OpenAI', 'Text-to-speech'],
  },
  {
    slug: 'intellisummarizer',
    title: 'IntelliSummarizer',
    description:
      'A document summarisation tool that condenses long documents and books into structured summaries, handling inputs well past a single model context window.',
    image: '/portfolio/intellisummarizer.png',
    href: 'https://intellisummarizer.vercel.app/',
    service: 'ai-content-evaluation',
    industry: 'AI & ML',
    stack: ['Next.js', 'OpenAI', 'Chunking pipeline'],
  },
  {
    slug: 'brain-wave',
    title: 'Brain Wave',
    description:
      'A conversational AI interface with streaming responses and persistent chat history, built as a customisable front end for business assistants.',
    image: '/portfolio/brain-wave.png',
    href: 'https://brain-wave-pi.vercel.app/',
    service: 'ai-agents-rag',
    industry: 'AI & ML',
    stack: ['React', 'OpenAI', 'Streaming'],
  },
  {
    slug: 'mock-interview-ai',
    title: 'Mock Interview AI',
    description:
      'An interview practice platform that transcribes spoken answers, scores them against a rubric and returns structured feedback — a graded generation pipeline in production.',
    image: '/portfolio/mock-interview-ai.png',
    href: 'https://moc-interview.vercel.app/',
    service: 'ai-evals',
    industry: 'Education',
    stack: ['Next.js', 'Whisper', 'GPT', 'Rubric scoring'],
  },
  {
    slug: 'glam-shack',
    title: 'Glam Shack',
    description: 'A fashion and accessories storefront with catalogue browsing, cart and checkout.',
    image: '/portfolio/glam-shack.png',
    href: 'https://glam-shackk.vercel.app/',
    service: 'web-app-development',
    industry: 'E-commerce',
    stack: ['Next.js', 'Stripe'],
  },
  {
    slug: 'pricewatch',
    title: 'PriceWatch',
    description:
      'A product price tracker that scrapes listings on a schedule, records price history and alerts users on drops.',
    image: '/portfolio/pricewatch.png',
    href: 'https://scrapper-flax.vercel.app/',
    service: 'automation-testing',
    industry: 'E-commerce',
    stack: ['Next.js', 'Puppeteer', 'Cron', 'MongoDB'],
  },
  {
    slug: 'vq-points',
    title: 'VQ Points',
    description: 'A customer loyalty platform for issuing, tracking and redeeming reward points.',
    image: '/portfolio/vq-points.png',
    href: 'https://vqpoints.web.app/',
    service: 'web-app-development',
    industry: 'E-commerce',
    stack: ['React', 'Firebase'],
  },
  {
    slug: 'fashion-store',
    title: 'Fashion',
    description:
      'An online fashion store with featured collections, product detail pages and secure checkout.',
    image: '/portfolio/fashion-store.png',
    href: 'https://objective-jennings-a2a6d7.netlify.app/',
    service: 'web-app-development',
    industry: 'E-commerce',
    stack: ['React', 'Redux'],
  },
  {
    slug: 'hardcore-villani',
    title: 'Hardcore Villani',
    description: 'A multi-category e-commerce app with catalogue, cart and order management.',
    image: '/portfolio/hardcore-villani.png',
    href: 'https://hardcore-villani-9d21cb.netlify.app/',
    service: 'mobile-app-development',
    industry: 'E-commerce',
    stack: ['React', 'Node.js'],
  },
  {
    slug: 'kellys-watersports',
    title: "Kelly's Watersports",
    description:
      'A booking site for a Jamaican water sports operator — scuba, kayaking, parasailing and glass-bottom boat tours, with per-activity enquiry flows.',
    image: '/portfolio/kellys-watersports.png',
    href: null,
    service: 'web-app-development',
    industry: 'Travel & Hospitality',
    stack: ['React'],
  },
  {
    slug: 'caribbean-restaurant-association',
    title: 'Caribbean Restaurant Association',
    description:
      'A membership and events site for an association supporting Caribbean food service businesses in New York City.',
    image: '/portfolio/caribbean-restaurant-association.png',
    href: 'https://magnificent-fudge-f1bb30.netlify.app/',
    service: 'web-app-development',
    industry: 'Travel & Hospitality',
    stack: ['React'],
  },
  {
    slug: 'swiss-swipe',
    title: 'Swiss Swipe',
    description:
      'A travel planning app using a swipe interface to shortlist activities and assemble them into a day-by-day itinerary.',
    image: '/portfolio/swiss-swipe.png',
    href: 'https://dancing-tartufo-58eccc.netlify.app/',
    service: 'mobile-app-development',
    industry: 'Travel & Hospitality',
    stack: ['React', 'Gesture UI'],
  },
  {
    slug: 'resort-hotel-reservation',
    title: 'Resort Hotel Reservation',
    description:
      'A hotel booking system with real-time room availability, rate selection and secure payment.',
    image: '/portfolio/resort-hotel-reservation.png',
    href: 'https://react-resort-hotel-reservation.netlify.app/',
    service: 'web-app-development',
    industry: 'Travel & Hospitality',
    stack: ['React', 'Stripe'],
  },
  {
    slug: 'room-rendezvous',
    title: 'RoomRendezvous',
    description: 'A room reservation platform covering search, availability and booking management.',
    image: '/portfolio/room-rendezvous.png',
    href: 'https://delightful-strudel-21da81.netlify.app/',
    service: 'web-app-development',
    industry: 'Travel & Hospitality',
    stack: ['React', 'Node.js'],
  },
  {
    slug: 'documents-editor',
    title: 'DocuFlex',
    description:
      'A collaborative document editor with authentication, multi-format upload, real-time editing and share links.',
    image: '/portfolio/documents-editor.png',
    href: 'https://documents-editor.vercel.app/sign-in',
    service: 'qa-agents',
    industry: 'Business Tools',
    stack: ['Next.js', 'Liveblocks', 'Clerk'],
  },
  {
    slug: 'techhirehub',
    title: 'TechHireHub',
    description:
      'A two-sided marketplace matching businesses with technicians, covering profiles, job posting and booking.',
    image: '/portfolio/techhirehub.png',
    href: 'https://idyllic-kitsune-b05596.netlify.app/login',
    service: 'web-app-development',
    industry: 'Business Tools',
    stack: ['React', 'Node.js', 'MongoDB'],
  },
  {
    slug: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description:
      'A configurable reporting dashboard with authentication, role-based views and interactive data visualisation.',
    image: '/portfolio/analytics-dashboard.png',
    href: 'https://peaceful-fermi-170007.netlify.app/#/dashboard',
    service: 'web-app-development',
    industry: 'Business Tools',
    stack: ['React', 'Recharts'],
  },
  {
    slug: 'upbeat-galileo',
    title: 'Upbeat Galileo',
    description:
      'A user management tool handling roles, permissions and access control, with onboarding automation and audit trails.',
    image: '/portfolio/upbeat-galileo.png',
    href: 'https://upbeat-galileo-cfa75c.netlify.app/',
    service: 'web-app-development',
    industry: 'Business Tools',
    stack: ['React', 'RBAC', 'Node.js'],
  },
  {
    slug: 'midalta-innovation',
    title: 'Midalta Innovation',
    description:
      'A marketing site for a strategy and innovation consultancy, covering services, case work and enquiries.',
    image: '/portfolio/midalta-innovation.png',
    href: 'https://xenodochial-saha-b77c1d.netlify.app/',
    service: 'web-app-development',
    industry: 'Business Tools',
    stack: ['React'],
  },
  {
    slug: 'precious-salmiakki',
    title: 'Precious Salmiakki',
    description: 'A brand and strategy agency site with service pages and a lead capture flow.',
    image: '/portfolio/precious-salmiakki.png',
    href: 'https://precious-salmiakki-1517da.netlify.app/',
    service: 'web-app-development',
    industry: 'Business Tools',
    stack: ['React'],
  },
  {
    slug: 'caribbean-research-institute',
    title: 'Caribbean Research Institute',
    description:
      'A research publication site presenting multidisciplinary analysis of Caribbean-American social, cultural and economic data.',
    image: '/portfolio/caribbean-research-institute.png',
    href: 'https://sensational-treacle-a612bb.netlify.app/',
    service: 'web-app-development',
    industry: 'Education',
    stack: ['React'],
  },
  {
    slug: 'religious-website',
    title: 'Community Faith Platform',
    description:
      'A community platform with scripture reference, event listings and member engagement features.',
    image: '/portfolio/religious-website.png',
    href: 'https://ivabraham.netlify.app/',
    service: 'web-app-development',
    industry: 'Education',
    stack: ['React'],
  },
  {
    slug: 'events-app',
    title: 'EventFlow',
    description:
      'An event management app covering scheduling, ticketing, reminders and real-time attendee updates.',
    image: '/portfolio/events-app.png',
    href: 'https://events-theta-eight.vercel.app/',
    service: 'mobile-app-development',
    industry: 'Media',
    stack: ['Next.js', 'Stripe', 'Clerk'],
  },
  {
    slug: 'poker-game',
    title: 'Poker Platform',
    description:
      'A multiplayer online poker game with authenticated accounts, table state synchronisation and real-time play.',
    image: '/portfolio/poker-game.png',
    href: 'https://cerulean-boba-8706a2.netlify.app/login',
    service: 'web-app-development',
    industry: 'Media',
    stack: ['React', 'Socket.io', 'Node.js'],
  },
  {
    slug: 'black-forest-artz',
    title: 'Black Forest Artz',
    description: 'An online art gallery with collection browsing, artwork detail pages and enquiries.',
    image: '/portfolio/black-forest-artz.png',
    href: 'https://black-forest-artz.web.app/',
    service: 'web-app-development',
    industry: 'Media',
    stack: ['React', 'Firebase'],
  },
  {
    slug: 'healthcare-app',
    title: 'Care Plus',
    description:
      'A patient-facing health platform with appointment scheduling, secure record access and telemedicine session support.',
    image: '/portfolio/healthcare-app.png',
    href: 'https://healthcare-tan.vercel.app/',
    service: 'mobile-app-development',
    industry: 'Healthcare',
    stack: ['Next.js', 'Node.js', 'Video'],
  },
  {
    slug: 'jaya',
    title: 'JAYA',
    description:
      'A diaspora platform connecting Jamaicans abroad with community initiatives at home, covering programmes, donations and member profiles.',
    image: '/portfolio/jaya.png',
    href: 'https://dazzling-almeida-b28d62.netlify.app/',
    service: 'web-app-development',
    industry: 'Healthcare',
    stack: ['React', 'Node.js'],
  },
  {
    slug: 'minister-agriculture-fisheries',
    title: 'Ministry of Agriculture & Fisheries',
    description:
      'A government ministry site publishing policy, announcements and public information for agriculture and fisheries.',
    image: '/portfolio/minister-agriculture-fisheries.png',
    href: 'https://stunning-gumption-a3f080.netlify.app/',
    service: 'web-app-development',
    industry: 'Healthcare',
    stack: ['React'],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** Resolve a service's `relatedProjects` slugs to real projects, skipping any typos. */
export function resolveProjects(slugs: string[]) {
  return slugs.map(getProject).filter((p): p is Project => p !== undefined);
}
