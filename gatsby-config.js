module.exports = {
  siteMetadata: {
    title: 'dhk.party',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-131762030-1',
      },
    },
    {
      resolve: 'gatsby-plugin-emotion',
      options: {},
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
          }
        ]
      }
    },
    'gatsby-plugin-glamor',
  ]
}
