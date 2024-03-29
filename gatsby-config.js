require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Priest Profile Cutting & Laser",
    titleTemplate: "%s", // TODO: Am I sure this is right
    description: 'Vented water high definition plasma cutting and laser cutting',
    url: 'https://priestprofile.co.nz/',
    siteUrl: `https://priestprofile.co.nz/`,
    image: 'https://priest.s3-ap-southeast-2.amazonaws.com/ogimages/priest_profile-og_image.jpg', // this could probably be a specific image once I know if it works
    ogImage: 'https://priest.s3-ap-southeast-2.amazonaws.com/ogimages/priest_profile-og_image.jpg', // this could probably be a specific image once I know if it works
    twitterImage: 'https://priest.s3-ap-southeast-2.amazonaws.com/ogimages/priest_profile-og_image.jpg', // this could probably be a specific image once I know if it works
    openingHours: 'Mo, Tu, We, Th, Fr 07:00-17:00',
    telephone: '(03) 366 9818',
    faxNumber: '(03) 366 9819',
    logo: 'images/icon.png',
    location: {
      '@type': 'Place',
      'address': {
        "@type": "PostalAddress",
        "streetAddress": "10 Barbour Street",
        "addressLocality": "Christchurch",
        "postalCode": "8011",
      }
    },
    areaServed: 'Christchurch, New Zealand',
    author: 'Priest Sheetmetal'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL,
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          "service",
          `videos`,
          `testimonial`,
          `industry`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify",
    "gatsby-plugin-sitemap",
    // favicon support
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Priest Profile Cutting & Laser`,
        short_name: `priestprofile`,
        start_url: `/`,
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        mergeStyleHashes: false, // you can disable styles sha256 hashes
        mergeScriptHashes: false,
        directives: {
          "default-src": "'self' *.litix.io/ *.mux.com/",
          "media-src": "'self' *.litix.io/ *.mux.com/ blob:",
          "style-src": "'self' 'unsafe-inline'",
          "script-src": "'self' 'unsafe-inline' ",
          "script-src": "'self' 'unsafe-inline' blob:",
          // the unsafe-inline on script-src is a problem for https://observatory.mozilla.org but without it the images break
          // https://stackoverflow.com/questions/52328336/csp-allow-specific-datafont-woffbase64-somebase64encoded-font-without-usin
          "img-src": "'self' data: *.mux.com/ *.litix.io/",
          "font-src": "'self' 'unsafe-inline' data:",
          "connect-src": "'self' *.mux.com/ *.litix.io/",
        }
      }
    },
  ],
};
