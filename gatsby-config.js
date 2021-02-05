module.exports = {
  siteMetadata: {
    title: "priest-profile",
    titleTemplate: "%s",
    description: 'Specialist Sheetmetal Engineers, Heavy Plate Workers and Metal Fabricators',
    url: 'https://priestsheetmetal.co.nz/',
    siteUrl: `https://priestsheetmetal.co.nz/`,
    image: 'src/images/PriestSheetMetal&PlateChristchurch-blue.jpg', // this could probably be a specific image once I know if it works
    openingHours: 'Mo, Tu, We, Th, Fr 07:00-17:00',
    telephone: '(03) 366 9818',
    faxNumber: '(03) 366 9819',
    logo: 'src/images/PriestSheetMetal&PlateChristchurch-blue.jpg',
    areaServed: 'Christchurch, New Zealand',
    author: 'Priest Sheetmetal'
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Priest Sheetmetal`,
        short_name: `priest`,
        start_url: `/`,
        background_color: `#1e93bd`,
        theme_color: `#1e93bd`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        // queryLimit: 1000, // Default to 100
        contentTypes: [
          // these can be found at http://localhost:1337/admin/plugins/users-permissions/roles/edit/2 always add the 's' case insensitive
          `service`, // http://localhost:1337/services
          `galleries`,
          `videos`
          
          // Im getting this with pretty much everything
          // ERROR (node:3759) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated

          // Even with a singular service query Im getting this 
          // warn Multiple node fields resolve to the same GraphQL field `StrapiService.Cover` - [`Cover`,
          // Its a warning which I was always getting so Im ok with it for now

        ],
        //If using single types place them in this array.
        // singleTypes: [`home-page`, `contact`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
        // loginData: {
        //   identifier: "",
        //   password: "",
        // },
      },
      
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        www: false,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto Slab`,
          `source sans pro\:400` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sitemap`,
  ],
};
