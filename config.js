'use strict';

module.exports = {
  siteUrl: `https://ugo.me`, // Site domain. Do not include a trailing slash!

  postsPerPage: 12, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

  siteTitleMeta: `Random thoughts by Ugo Bataillard`, // This allows an alternative site title for meta data for pages.
  siteDescriptionMeta: `I turn ideas into products and people into teams.`, // This allows an alternative site description for meta data for pages.

  shareImageWidth: 1000, // Change to the width of your default share image
  shareImageHeight: 523, // Change to the height of your default share image

  shortTitle: "Ugo's Blog", // Used for App manifest e.g. Mobile Home Screen
  siteIcon: `favicon.png`, // Logo in /static dir used for SEO, RSS, and App manifest
  backgroundColor: `#e9e9e9`, // Used for Offline Manifest
  themeColor: `#15171A`, // Used for Offline Manifest


  url: 'https://ugo.me',
  title: 'Random thoughts by Ugo Bataillard',
  subtitle: 'I turn ideas into products and people into teams.',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-49012373-2',
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/about'
    },
    {
      label: 'Contact me',
      path: '/contacts'
    }
  ],
  author: {
    name: 'Ugo Bataillard',
    photo: 'https://www.gravatar.com/avatar/543e2716aa915b98e60a69ea5067464c?s=200',
    bio: 'I turn ideas into products and people into teams.',
    contacts: {
      email: 'hi@ugo.me',
      linkedin: 'https://www.linkedin.com/in/ugobataillard',
      telegram: 'knshiro',
      twitter: 'UgoBataillard',
      github: 'knshiro',
      rss: '/rss'
    }
  }
};
