module.exports = {
  siteMetadata: {
    title: 'Rogin Farrer',
    author: 'Rogin Farrer'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-prismjs'], // just in case those previously mentioned remark plugins sound cool :)
        excerpt_separator: `<!-- end -->`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`
      }
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/images/bitmoji2.png',
        // WebApp Manifest Configuration
        appName: 'Superb Meteors',
        appDescription: null,
        developerName: 'Rogin Farrer',
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#007acc',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    'gatsby-plugin-offline'
  ]
};
