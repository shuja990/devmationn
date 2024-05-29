// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://www.devmations.com',
    generateRobotsTxt: true, // Generate robots.txt file
    exclude: [], // Add any paths you want to exclude from the sitemap
    changefreq: 'daily',
    priority: 0.7,
    sitemapSize: 5000,
    outDir: './public', // Directory where the sitemap will be generated
  };
  