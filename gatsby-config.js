require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Jubin Jayaprakash Blog`,
    siteTitleAlt: `Jubin Jayaprakash Blog`,
    siteHeadline: `Jubin Jayaprakash Blog Blog - Java, Spring and Cloud`,
    siteUrl: `https://jayaprakashjub.in`,
    siteDescription: `Java, Spring and Cloud Development Tutorials`,
    author: `@jubinj49`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/jubinj49`,
          },
          {
            name: `Github`,
            url: `https://github.com/jaypac/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jubin Jayaprakash Blog`,
        short_name: `Jubin's blog`,
        description: `Java, Spring and Cloud Development Tutorials`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
