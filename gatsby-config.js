module.exports = {
  siteMetadata: {
    title: "Priest Profile Cutting & Laser",
    titleTemplate: "%s",
    description: 'Vented water high definition plasma cutting and laser cutting',
    url: 'https://priestprofile.co.nz/',
    siteUrl: `https://priestprofile.co.nz/`,
    image: 'https://priest.s3-ap-southeast-2.amazonaws.com/ogimages/priest_profile-og_image.jpg', // this could probably be a specific image once I know if it works
    ogImage: 'https://priest.s3-ap-southeast-2.amazonaws.com/ogimages/priest_profile-og_image.jpg', // this could probably be a specific image once I know if it works
    twitterImage: 'https://priest.s3-ap-southeast-2.amazonaws.com/ogimages/priest_profile-og_image.jpg', // this could probably be a specific image once I know if it works
    openingHours: 'Mo, Tu, We, Th, Fr 07:00-17:00',
    telephone: '(03) 366 9818',
    faxNumber: '(03) 366 9819',
    logo: 'src/images/icon.png',
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
        apiURL: "http://45.79.101.19:1338", // linode build
        // apiURL: "http://localhost:1338", // local
        contentTypes: [
          "service",
          `videos`,
          // `testimonials`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-csp`,
        options: {
          mergeStyleHashes: false, // you can disable styles sha256 hashes
          mergeScriptHashes: false,
          directives: {
            "default-src": "player.vimeo.com",
            "style-src": "'self' 'unsafe-inline'",
            "script-src": "'self' 'unsafe-inline' player.vimeo.com",
            // the unsafe-inline on script-src is a problem for https://observatory.mozilla.org but without it the images break
            "font-src": "'self' 'unsafe-inline' data:font/woff2",
          }
        }
    },
  ],
};
