import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";

import Header from "../components/header";
import Footer from "../components/footer";
import Seo from "../components/seo";
import Testimonials from "../components/testimonials";
import Cross from "../components/cross";

import MuxVideo from "../components/mux-video";
import MuxCover from "../components/mux-cover";

function Cover(props) {
  var imageAlt = props.imageAlt;

  if (props.muxCover) {
    return (
      <div className="single__cover--video">
        <MuxCover mux={props.muxCover} />
      </div>
    );
  } else {
    return (
      <GatsbyImage
        image={cover}
        alt={imageAlt}
        className="single__cover--image"
      />
    );
  }
}

function Sec(props) {
  // seperator between the secondary videos
  if (props.hasVideo.length > 1) {
    return <Cross />;
  }
  return null;
}

const IndexPage = () => {

  const { strapiService } = useStaticQuery(graphql`
    query IndexQuery {
      strapiService(slug: { eq: "laser-profile-cutting" }) {
        title
        excerpt
        
        content {
          data {
            content
          }
        }

        coverVideo
        muxCover

        videos {
          id
          title
          content
          mux
        }

        gallery {
          name
          alternativeText
          hash
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)


  return (
    <>
      <Seo
        title={"Priest Profile Cutting & Laser"}
        description={strapiService.excerpt}
      />

      <Header />

      <div id="header-contact-background" className="shadow">
        <div className="header-contact">
          <h3>Specialist welders, sheetmetal engineers and general fabricators in Christchurch.</h3>

          <section className="together">
            <div className="summit__contact--service summit__contact--phone">
              {/* // ? are these buttons? */}
              <a href="tel:033669818">
                <div className="summit__contact--icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <title>phone</title>
                    {/* // TODO: move this to a seperate file */}
                    <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
                  </svg>
                </div>
                <span className="summit__contact--text">
                  Call us today to discuss your project 366 9818
                </span>
              </a>
            </div>

            <div className="summit__contact--service summit__contact--email">
              <a href="https://goo.gl/maps/EzF5epUkFxaEihtLA">
                <div className="summit__contact--icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                  >
                    <title>location</title>
                    {/* // TODO: move this to a seperate file */}
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <span className="summit__contact--text">
                  Find us at 10 Barbour Street, Christchurch
                </span>
              </a>
            </div>
          </section>
        </div>
      </div>

      <main>
        <article className="single">
          <div className="single__cover">
            <Cover
              medium={strapiService.coverMedium}
              muxCover={strapiService.muxCover}
              image={strapiService.cover?.localfile?.childImageData?.GatsbyImageData}
              imageAlt={strapiService.cover?.alternativeText}
            />
          </div>

          <div className="service-info">
            <h2>{strapiService.title}</h2>
            <div className="single__markdown">
              <ReactMarkdown
                children={strapiService.content.data.content}
              />
            </div>
          </div>

          {strapiService.videos.map((vids) => (
            <section key={vids.id}>
              <Sec hasVideo={strapiService.videos} />

              <div className="videos">
                <figure>
                  <div>
                    <MuxVideo mux={vids.mux} />
                  </div>
                </figure>

                <div className="">
                  <h3>{vids.title}</h3>
                  {vids.content}
                </div>
              </div>
            </section>
          ))}

          <div
            // TODO: move these to a class
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
              {/* // TODO: figure seems the wrong thing to be here */}
              <figure className="wp-block-gallery columns-2 is-cropped">
                <ul className="blocks-gallery-grid">
                  {strapiService.gallery.map(photos => (
                    <li key={photos.hash} className="blocks-gallery-item">
                      {/* // ? this key might be doubling up */}
                      <GatsbyImage
                        image={
                          photos.localFile?.childImageSharp?.gatsbyImageData
                        }
                        alt={photos.name}
                      />
                    </li>
                  ))}
                </ul>
              </figure>
            </div>
          </div>
        </article>
      </main>

      <Testimonials />

      <Footer />
    </>
  );
};

export default IndexPage;
