'use strict';

module.exports = {
  siteUrl: `https://ugo-me.netlify.com`, // Site domain. Do not include a trailing slash!

  postsPerPage: 12, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

  siteTitleMeta: `Ghost Gatsby Starter`, // This allows an alternative site title for meta data for pages.
  siteDescriptionMeta: `A starter template to build amazing static websites with Ghost and Gatbsy`, // This allows an alternative site description for meta data for pages.

  shareImageWidth: 1000, // Change to the width of your default share image
  shareImageHeight: 523, // Change to the height of your default share image

  shortTitle: "Ugo'sBlog", // Used for App manifest e.g. Mobile Home Screen
  siteIcon: `favicon.png`, // Logo in /static dir used for SEO, RSS, and App manifest
  backgroundColor: `#e9e9e9`, // Used for Offline Manifest
  themeColor: `#15171A`, // Used for Offline Manifest


  url: 'https://ugo-me.netlify.com',
  title: 'Blog by Ugo Bataillard',
  subtitle: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: '',
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'Ugo Bataillard',
    photo: '/photo.jpg',
    bio: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
    contacts: {
      email: '#',
      telegram: '#',
      twitter: '#',
      github: '#',
      rss: '#',
      vkontakte: '#'
    }
  }
};
