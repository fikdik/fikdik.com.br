module.exports = {
  siteMetadata: {
    title: '#fikdik',
    description: 'A internet fácil',
    author: 'fikdik.com.br',
    twitterAutor: '@fikdikcombr',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: { src: `${__dirname}/src` },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/_s/uploads`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/_s/img`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/components/Icon/assets`,
        name: 'icons',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: false,
        fileName: false,
      },
    },
    'gatsby-plugin-svg-sprite',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: { name: 'uploads' },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              quality: 72,
              maxWidth: 2048,
              withWebp: { quality: 80 },
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: { destinationDir: 'static' },
          },
        ],
      },
    },
    {
      resolve:
        process.env.NODE_ENV === 'development'
          ? '@talves/gatsby-plugin-netlify-cms'
          : 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
        enableIdentityWidget: true, // Netlify hosting
        publicPath: '_admin',
        htmlTitle: 'Admin Panel',
        // htmlFavicon: '/img/favico.ico',
        manualInit: true,
      },
    },
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
