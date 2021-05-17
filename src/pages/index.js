import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Header from "../components/header";
import Footer from "../components/footer";
import Seo from "../components/seo";

// import SummitContact from "../components/summit-contact";

import "@fontsource/roboto-slab/400.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import "../styles/index.scss";

// cover can be removed as its known to be video

// START OF VIDEOS
function Sec(props) {
  // seperator between the secondary videos
  if (props.hasVideo > 1) {
    return <hr className="swiss" />;
  }
  return null;
}
// END OF VIDEOS

// gallery doesn't need a query we know its there

const IndexPage = ({ data }) => {
  return (
    <>
      <Seo
        title={
          data.strapiService.title +
          " - Priest Sheet Metal & Plate Christchurch"
        }
        description={data.strapiService.Content}
        pathname={"services/" + data.strapiService.title}
      />
      <Header />

      <div id="header-contact-background" class="shadow">
        <div class="header-contact">
          <h3>
            Specialist welders, sheetmetal engineers and general fabricators in
            Christchurch.
          </h3>

          <section class="together">
            <div className="summit__contact--service summit__contact--phone">
              {/* are these buttons? */}
              <a href="tel:033669818">
                <div className="summit__contact--icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    title="phone"
                  >
                    <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
                  </svg>
                </div>
                {/* </a> */}
                {/* <a href="tel:033669818" className="summit__contact--text"> */}
                <span className="summit__contact--text">
                  Call us today to discuss your project 366 9818
                </span>
              </a>
              <div className="summit-contact--skew shadow">
                {/* stay gold */}
              </div>
            </div>
            {/* summit__contact--phone */}

            <div className="summit__contact--service summit__contact--email">
              <a href="https://goo.gl/maps/EzF5epUkFxaEihtLA">
                <div className="summit__contact--icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    title="map"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <span className="summit__contact--text">
                  Find us at 10 Barbour Street, Christchurch
                </span>
              </a>
              <div className="summit-contact--skew">{/* stay gold */}</div>
              {/* <div className="summit-contact--skew__border"> stay gold </div> */}
            </div>
            {/* summit__contact--email */}
          </section>
        </div>
        {/* .header-contact */}
      </div>
      {/* #header-contact-background */}

      <main>
        <article
          style={{
            maxWidth: "75rem",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "1rem"
          }}
        >
          <div
            style={{
              padding: "56.25% 0 0 0",
              position: "relative"
            }}
          >
            <iframe
              src={
                "https://player.vimeo.com/video/" +
                data.strapiService.coverVideo +
                "?background=1"
              }
              title="cover video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
          {/* https://help.vimeo.com/hc/en-us/articles/115011183028-Embedding-background-videos */}

          {/* title and content area open */}
          <div className="service-info">
            <h2>{data.strapiService.title}</h2>
            <div>
              <h3>{data.strapiService.byline}</h3>
              <p>{data.strapiService.Content}</p>
            </div>
          </div>
          {/* .service-info */}

          <hr className="tasks__divider" />
          <div className="tasks__divider--cross">{/* stay gold */}</div>

          {data.strapiService.videos.map(vids => (
            <>
              <Sec hasVideo={data.strapiService.hasVideo} />

              <div className="wp-block-media-text">
                <figure className="wp-block-media-text__media">
                  <div
                    style={{
                      padding: "56.25% 0 0 0",
                      position: "relative"
                    }}
                  >
                    <iframe
                      title={vids.title}
                      src={
                        "https://player.vimeo.com/video/" +
                        vids.vimeo +
                        "?title=0&byline=0&portrait=0"
                      }
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                      }}
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                    ></iframe>
                  </div>
                </figure>

                <div className="wp-block-media-text__content">
                  <h3>{vids.title}</h3>
                  {vids.content}
                </div>
              </div>
            </>
          ))}
          {/* close out the videos area */}

          <hr className="swiss" />

          <div
            style={{
              display: "flex",
              marginBottom: "28px",
              justifyContent: "space-between",
              flexDirection: "column"
            }}
            className="services-photogallery"
          >
            <h3 className="wp-block-colum">Photo Gallery</h3>
            <div className="wp-block-colum">
              {/* 🚨 figure seems the wrong thing to be here */}
              <figure className="wp-block-gallery columns-2 is-cropped">
                <ul className="blocks-gallery-grid">
                  {data.strapiService.gallery.map(photos => (
                    <li className="blocks-gallery-item">
                      <GatsbyImage
                        image={
                          photos.formats.medium.childImageSharp.gatsbyImageData
                        }
                      />
                    </li>
                  ))}
                </ul>
              </figure>
            </div>
            {/* .wp-block-column */}
          </div>
          {/* {props.loop} */}
        </article>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    strapiService(title: { eq: "Profile Cutting - Plasma & Laser" }) {
      title
      Content
      byline

      coverVideo
      hasVideo
      videos {
        title
        content
        vimeo
      }

      gallery {
        name
        url
        alternativeText

        formats {
          medium {
            id
            childImageSharp {
              gatsbyImageData(formats: AUTO, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`;
