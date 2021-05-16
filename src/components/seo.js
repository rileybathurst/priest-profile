// https://www.gatsbyjs.com/docs/add-seo-component/

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, image, lang }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const {
    defaultTitle,
    titleTemplate,
    siteUrl,
    defaultDescription,
    defaultImage,
    ogImage,
    twitterImage,
    telephone,
    openingHours,
    faxNumber,
    logo,
    areaServed,
    location,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    ogImage: ogImage,
    twitterImage: twitterImage,
    url: `${siteUrl}${pathname || "/"}`,
    openingHours: openingHours,
    telephone: telephone,
    faxNumber: faxNumber,
    logo: logo,
    areaServed: areaServed,
    streetAddress: location.address.streetAddress,
    addressLocality: location.address.addressLocality,
    postalCode: location.address.postalCode,
  }

  return (
    <Helmet
      title={seo.title}
      titleTemplate={titleTemplate}
      htmlAttributes={{
        lang: 'en-US',
      }}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.ogImage} />
      <meta property="og:type" content="website" />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.ogImage} />}
      {seo.image && <meta name="twitter:image" content={seo.twitterImage} />}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      <meta property="og:image" content={seo.image} />
      {seo.openingHours && (
        <meta name="openingHours" content={seo.openingHours} />
      )}
      {seo.telephone && <meta name="telephone" content={seo.telephone} />}
      {seo.faxNumber && <meta name="faxNumber" content={seo.faxNumber} />}
      {seo.areaServed && <meta name="areaServed" content={seo.areaServed} />}
      <meta name="logo" content={seo.logo} />
      <meta
        name="location"
        content={
          seo.streetAddress +
          ", " +
          seo.addressLocality +
          ", " +
          seo.postalCode
        }
      />
      <html lang="en" />
    </Helmet>
  );
};

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  image: PropTypes.string,
  ogImage: PropTypes.string,
  twitterImage: PropTypes.string,
  openingHours: PropTypes.string,
  telephone: PropTypes.string,
  faxNumber: PropTypes.string,
  logo: PropTypes.string,
  areaServed: PropTypes.string,
  location: PropTypes.string,
}

SEO.defaultProps = {
  lang: `en`,
  title: null,
  description: null,
  article: false,
  pathname: null,
  image: null,
  ogImage: null,
  twitterImage: null,
  openingHours: null,
  telephone: null,
  faxNumber: null,
  logo: null,
  areaServed: null,
  location: null,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        ogImage: image
        twitterImage: image
        openingHours: openingHours
        telephone: telephone
        faxNumber: faxNumber
        areaServed: areaServed
        logo: logo
        location {
          address {
            _type
            addressLocality
            postalCode
            streetAddress
          }
        }
      }
    }
  }
`