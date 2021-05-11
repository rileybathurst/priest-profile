import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Header from "../components/header";
import Footer from "../components/footer";
import Seo from "../components/seo";

// import SummitContact from "../components/summit-contact";

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
      <main>
        <article
          style={{
            maxWidth: "75rem",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "1rem",
          }}
        >
          <div
            style={{
              padding: "56.25% 0 0 0",
              position: "relative",
            }}
          >
            <iframe
              src={"https://player.vimeo.com/video/" + data.strapiService.coverVideo + "?background=1"}
              title="cover video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
          {/* https://help.vimeo.com/hc/en-us/articles/115011183028-Embedding-background-videos */}

          <hr className="swiss" />
          {/* title and content area open */}
          <div
            style={{
              display: "flex",
              marginBottom: "28px",
              justifyContent: "space-between",
            }}
            className="service-info"
          >
            <h2 className="wp-block-colum">{data.strapiService.title}</h2>
            <div className="wp-block-colum">
              <h3>{data.strapiService.byline}</h3>
              <p>{data.strapiService.Content}</p>
            </div>
          </div>
          {/* title and content area close */}
          {data.strapiService.videos.map((vids) => (
            <>
              <Sec hasVideo={data.strapiService.hasVideo} />

              <div className="wp-block-media-text">
                <figure className="wp-block-media-text__media">
                  <div
                    style={{
                      padding: "56.25% 0 0 0",
                      position: "relative",
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
                        height: "100%",
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
          }}
          className="services-photogallery"
        >
          <h3 className="wp-block-colum">Photo Gallery</h3>
          <div className="wp-block-colum">
            {/* 🚨 figure seems the wrong thing to be here */}
            <figure className="wp-block-gallery columns-2 is-cropped">
              <ul className="blocks-gallery-grid">
                {data.strapiService.gallery.map((photos) => (
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
          </div>{/* .wp-block-column */}
        </div>{/* {props.loop} */}

        </article>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const query = graphql`
  query MyQuery {
    strapiService(title: { eq: "PROFILE CUTTING - Plasma & Laser" }) {
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

              gatsbyImageData(
                formats: AUTO
                placeholder: BLURRED
              )
            }
          }
        }
      }

    }
  }
`;
