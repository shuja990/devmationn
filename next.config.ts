import type { NextConfig } from 'next';

/**
 * Permanent redirects from the old Bootstrap template's URL structure.
 * The old site is indexed under these paths; every one must land somewhere
 * relevant or the rebuild silently drops its existing search equity.
 */
const legacyRedirects = [
  // Old service pages -> new service structure
  ['/ai-and-machine-learning-solutions', '/services/ai-agents-rag'],
  ['/web-app-development', '/services/web-app-development'],
  ['/mobile-app-development', '/services/mobile-app-development'],
  ['/cloud-and-devops-solutions', '/services/automation-testing'],
  ['/mvp-development', '/services/web-app-development'],
  ['/ui-ux-design', '/services/web-app-development'],
  ['/shopify-development', '/services/web-app-development'],
  ['/wordpress-development', '/services/web-app-development'],
  ['/blockchain-development', '/services'],
  ['/single-service', '/services'],
  // Old company pages
  ['/about-us', '/about'],
  ['/contact-us', '/contact'],
  ['/blogs', '/insights'],
  ['/blog-single', '/insights'],
  ['/career', '/careers'],
  // Old per-role career pages -> the careers index
  ['/full-stack-engineer', '/careers'],
  ['/ai-machine-learning-engineer', '/careers'],
  ['/devops-cloud-engineer', '/careers'],
  ['/mobile-app-developer', '/careers'],
  ['/blockchain-developer', '/careers'],
  ['/wordpress-shopify-developer', '/careers'],
  // Dead template routes
  ['/login', '/contact'],
  ['/coming-soon', '/'],
  ['/sass-company-two', '/'],
] as const;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
};

export default nextConfig;
