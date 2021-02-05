// this is the single page

import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Header from "../components/header"
import Footer from "../components/footer"

import SEO from "../components/seo"
import HeaderContact from "../components/headercontact"

// START OF COVER
function Cover(props) {
  var medium = props.medium // query the cover if its has been set to video
  var video = props.video // the vimeo id
  var photo = props.photo // if there isnt a video cover insert a photo

  if (medium === 'video') {
    return  <div style={{
      padding:'56.25% 0 0 0',
      position:'relative'
      }}>
        <iframe src={'https://player.vimeo.com/video/' + video + '?background=1'}
        title='cover video'
        style={{
          position:'absolute',
          top:0,
          left:0,
          width:'100%',
          height:'100%'
          }}
          frameBorder="0" allow="autoplay; fullscreen" allowFullScreen />
      </div>
  } // else
  return <Img fluid={photo} />
}
// END OF COVER

// START OF GALLERY
// Part of the gallery
// returns each photo as a list item
function Photos(props) {
  return <li className="blocks-gallery-item">
    <img src={'https://priestsheetmetal.co.nz' + props.photoSrc} alt={props.photoAlt} loading="lazy" />
    {/* {props.photoSrc} test */}
    {/* {props.photoAlt} test */}
  </li>
}

function Gallery(props) {
  var hasGallery = props.hasGallery
  // this is a variable I define manually if we have a gallery make it 1
  // otherwise it's undefined as the boolean function of strapi was not working for me

  // console.log(hasGallery); // test
  if (hasGallery === 1) { // this is kinda a faked boolean but could be done better
    // possibly if (hasGallery) { but that all needs to be tested
    return <>
      <hr className="swiss" />

      <div style={{
        display: 'flex',
        marginBottom: '28px',
        justifyContent: 'space-between'
      }}
      className="services-photogallery"
      >
      <h3 className="wp-block-colum">Photo Gallery</h3>
      <div className="wp-block-colum">
        <figure className="wp-block-gallery columns-2 is-cropped">
          <ul className="blocks-gallery-grid">
            {/* <li>test</li> */}

            {/* This is confusing maybe it works but it needs to be documented when I can understand it */}
            {/* not gatsby Img so and not responsive image but day 1 this is atleast working */}
            {/* // needs a lozad lazy load for everything other than chrome */}
            {/* make this a variable and do some work on it, remove the extension, change it, add sizes etc */}

            {/* up to here is establishing the gallery before dipping into the map for each */}
            {props.loop}
            {/* Adding a loop inside of a prop seems a very react kinda thing to do but Im not sure if it's smart? */}
          </ul>
        </figure>
      </div> {/* column */}
    </div>
  </> } // else return
  return <>
    {/* null // no gallery  */}
    {/* test */}
  </>
}
// END OF GALLERY

// START OF VIDEOS
function Sec(props) { // seperator between the secondary videos
  if (props.hasVideo > 1) {
    return <hr className="swiss" />
  }
  return null
}
// END OF VIDEOS

const ArticleTemplate = ({ data }) => (
  <>
    {/* {data.strapiService.title} */}

    <SEO
      title={data.strapiService.title + " - Priest Sheet Metal & Plate Christchurch"}
      description={data.strapiService.Content}
      pathname={"services/" + data.strapiService.title}
    />
    <Header />
    <HeaderContact />

    <article style={{
          maxWidth: '75rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '1rem'
      }}>

        <Cover medium={data.strapiService.coverMedium} video={data.strapiService.coverVideo} photo={data.strapiService.Cover.childImageSharp.fluid} />
        {/* https://help.vimeo.com/hc/en-us/articles/115011183028-Embedding-background-videos */}

        <hr className="swiss" />

        {/* title and content area open */}
        <div style={{
            display: 'flex',
            marginBottom: '28px',
            justifyContent: 'space-between'
        }}
        className="service-info">
          <h2 className="wp-block-colum">{data.strapiService.title}</h2>
          <div className="wp-block-colum">
            <h3>{data.strapiService.byline}</h3>
            <p>{data.strapiService.Content}</p>
          </div>
        </div>
        {/* title and content area close */}


        {data.strapiService.videos.map(vids => <>
          <Sec hasVideo={data.strapiService.hasVideo} />

          <div className="wp-block-media-text">
            <figure className="wp-block-media-text__media">
              <div style={{
                padding: '56.25% 0 0 0',
                position: 'relative'
              }}><iframe title={vids.title} src={'https://player.vimeo.com/video/' + vids.vimeo + '?title=0&byline=0&portrait=0'}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe></div>
            </figure>

            <div className="wp-block-media-text__content">
              <h3>{vids.title}</h3>
              {vids.content}
            </div>
          </div>
          </>
        )}
        {/* close out the videos area */}

        <Gallery
          hasGallery={data.strapiService.hasGallery}
          loop={data.strapiService.gallery.map(photos =><Photos photoSrc={photos.url} photoAlt={photos.name} /> )}
        />
        {/* {data.strapiService.hasGallery} test */}

    </article>

    <Footer />
  </>
)

export default ArticleTemplate

export const query = graphql`
  query MyQuery {
    strapiService(title: {eq: "PROFILE CUTTING - Plasma & Laser "}) {
      title
      Content
      byline
      coverMedium
      Cover {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
          fixed {
            src
          }
        }
      }
      coverVideo
      hasVideo
      videos {
        title
        content
        vimeo
      }
      hasGallery
      gallery {
        name
        url
      }
    }
  }

`
