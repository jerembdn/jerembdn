module.exports = {
  siteUrl: "https://jeremybdn.fr",
  changefreq: "monthly",
  priority: 1.0,
  generateRobotsTxt: true,
  exclude: ["/presence", "/server-sitemap.xml"],
  alternateRefs: [
    {
      href: "https://jeremybdn.fr/fr",
      hreflang: "fr",
    },
  ],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/presence/",
      },
    ],
    additionalSitemaps: [
      "https://jeremybdn.fr/sitemap.xml",
      "https://jeremybdn.fr/server-sitemap.xml",
    ],
  },
};
