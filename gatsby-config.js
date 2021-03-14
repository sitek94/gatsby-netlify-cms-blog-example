module.exports = {
  siteMetadata: {
    title: `Maciek's Learning Journal`,
    // #TODO: Add meaningful description
    description: `Description of the blog...`,
    author: `Maciek Sitkowski`,
    siteUrl: `https://blog.macieksitkowski.com`,
  },
  plugins: [
    // 'gatsby-plugin-netlify-cms',
    'gatsby-plugin-emotion',
    // 'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Journal Blog`,
        short_name: `journal`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sitemap',
    // 'gatsby-plugin-mdx',
    // 'gatsby-plugin-sharp',
    // 'gatsby-transformer-sharp',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: './src/images/',
    //   },
    //   __key: 'images',
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'pages',
    //     path: './src/pages/',
    //   },
    //   __key: 'pages',
    // },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
