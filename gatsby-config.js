'use strict';

const siteConfig = require('./config.js');
const postCssPlugins = require('./postcss-config.js');
const generateRSSFeed = require('./src/utils/rss/generate-feed')

let ghostConfig;

try {
  ghostConfig = require('./.ghost');
} catch (e) {
  ghostConfig = {
    production: {
      apiUrl: process.env.GHOST_API_URL,
      contentApiKey: process.env.GHOST_CONTENT_API_KEY,
    },
  }
} finally {
  const {
    apiUrl,
    contentApiKey
  } = process.env.NODE_ENV === 'development' ? ghostConfig.development : ghostConfig.production;

  if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
    throw new Error(`GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build. Check the README.`) // eslint-disable-line
  }
}

module.exports = {
  siteMetadata: {
    url: siteConfig.url,
    siteUrl: siteConfig.siteUrl,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    copyright: siteConfig.copyright,
    disqusShortname: siteConfig.disqusShortname,
    menu: siteConfig.menu,
    author: siteConfig.author
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'pages'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/media`,
        name: 'media'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static`
      }
    },
    {
      resolve: 'gatsby-source-ghost',
      options: process.env.NODE_ENV === 'development'
        ? ghostConfig.development : ghostConfig.production,
    },
    /**
     *  Utility Plugins
     */
    {
      resolve: 'gatsby-plugin-ghost-manifest',
      options: {
        short_name: siteConfig.shortTitle,
        start_url: '/',
        background_color: siteConfig.backgroundColor,
        theme_color: siteConfig.themeColor,
        display: 'minimal-ui',
        icon: `static/${siteConfig.siteIcon}`,
        query: `
              {
                  allGhostSettings {
                      edges {
                          node {
                              title
                              description
                          }
                      }
                  }
              }
            `,
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          allGhostSettings {
              edges {
                  node {
                      title
                      description
                  }
              }
          }
      }
              `,
        feeds: [
          generateRSSFeed(siteConfig),
        ],
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-katex',
            options: {
              strict: 'ignore'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            }
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: siteConfig.googleAnalyticsId
      }
    },
    {
      resolve: 'gatsby-plugin-advanced-sitemap',
      options: {
        query: `
          {
              allGhostPost {
                  edges {
                      node {
                          id
                          slug
                          updated_at
                          created_at
                          feature_image
                      }
                  }
              }
              allGhostPage {
                  edges {
                      node {
                          id
                          slug
                          updated_at
                          created_at
                          feature_image
                      }
                  }
              }
              allGhostTag {
                  edges {
                      node {
                          id
                          slug
                          feature_image
                      }
                  }
              }
              allGhostAuthor {
                  edges {
                      node {
                          id
                          slug
                          profile_image
                      }
                  }
              }
          }`,
        mapping: {
          allGhostPost: {
            sitemap: 'posts',
          },
          allGhostTag: {
            sitemap: 'tags',
          },
          allGhostAuthor: {
            sitemap: 'authors',
          },
          allGhostPage: {
            sitemap: 'pages',
          },
        },
        exclude: [
          '/dev-404-page',
          '/404',
          '/404.html',
          '/offline-plugin-app-shell-fallback',
        ],
        createLinkInHead: true,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-force-trailing-slashes',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [...postCssPlugins],
        cssLoaderOptions: {
          camelCase: false,
        }
      }
    }
  ]
};