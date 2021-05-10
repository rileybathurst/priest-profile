import * as React from "react"
import { Link, graphql } from 'gatsby'
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"

import SummitContact from '../components/summit-contact'

import "../styles/index.scss";

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
  // return <Img fluid={photo} />

  {
    return null
  }
}
// END OF COVER

// START OF VIDEOS
function Sec(props) { // seperator between the secondary videos
  if (props.hasVideo > 1) {
    return <hr className="swiss" />
  }
  return null
}
// END OF VIDEOS

const IndexPage = ({ data }) => {
  return (
    <>
    <Seo
      title={data.strapiService.title + " - Priest Sheet Metal & Plate Christchurch"}
      description={data.strapiService.Content}
      pathname={"services/" + data.strapiService.title}
    />
    <Header />
    <main>
    <article style={{
          maxWidth: '75rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: '1rem'
      }}>

        {/* <Cover medium={data.strapiService.coverMedium} video={data.strapiService.coverVideo} photo={data.strapiService.Cover.childImageSharp.fluid} /> */}
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

        {/* style="display:flex;margin-bottom:28px;justify-content:space-between" */}

        <div  className="services-photogallery">
          <h3 className="wp-block-colum">Photo Gallery</h3>
          <div className="wp-block-colum">
            <figure className="wp-block-gallery columns-2 is-cropped">

              <ul className="blocks-gallery-grid">
                <li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/ed66b8e597ce4945a981479e446ca20c.jpg" alt="Architectural-Planter-Boxes-Custom-Made-_1-1024x768.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/bfb5f4053f6a4e06926a453da4aa658a.jpg" alt="Architectural-signs-Profile-Cutting-Custom-Made-Steel-Rustic-Blackened-Steel-_1-1024x768.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/5ada1c60dea241b0bcb3add453b7d9f0.jpg" alt="Cone-Cutting-and-Folding-Rolling-Steel-_1-1024x768.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/a923e4c83aa246c490fb92e157151b84.jpg" alt="Custom-Flange-Profile-Cutting-Steel-_1-768x1024.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/ddc7b49cd7ce49a3acd8a985ba7cf839.jpg" alt="Custom-Logo_s-Profile-Cutting-Powder-coating-_1-1024x498.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/21b1a05c096e4f6cb40308545ca07b55.jpg" alt="Custom-Profile-Cutting-Folding-and-Fabrication-_1-768x1024.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/547cbb81db314d4f80fe0eafc7c9d9d2.jpg" alt="Custom-Sign-Fabrication-Welding-Cutting-and-Folding-Profile-Cutting-_1-1024x768.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/e8d892a6f7ac492c979a5dde26db956a.jpg" alt="Custom-Sign-Fabrication-Welding-Cutting-and-Folding-Profile-Cutting-1_1-1024x768.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/b920ffafb76344e6b2429cc259826c8f.jpg" alt="Custom-Profile-Cutting-Folding-and-Fabrication-Stainless-Steel-_1-1024x768.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/8f39edcb40d54786982390f90d8d2f51.jpg" alt="Custom-Profile-Cutting-Folding-and-Fabrication-2_1-768x1024.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/e42db8b6a6ad4e7bb108756199f323bb.jpg" alt="Custom-Profile-Cutting-Folding-and-Fabrication-1_1-768x1024.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/3b74db48c1994be7a7e199645e3c7b10.jpg" alt="Custom-Sign-Profile-Cutting-Fabrication-Cutting-and-Folding-_1-768x1024.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/46cdb4403a7147e7b8734ed2103ac48e.jpg" alt="Planter-Boxes-Steel-Powder-coated-Landscaping-Custom-_1-1024x768.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/f8b338b912394a5a95a8f8d657379509.jpg" alt="Flanges-Profile-Cutting-Custom-Steel-_1-768x1024.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/da230d6e6f5842818784a22a1743db79.jpg" alt="Custom-Logo-Profile-Cutting-_1-768x1024.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/f550d1aabcd54fbfb897956b8ac84507.jpg" alt="Sign-Custom-Profile-Cutting-_1-768x1024.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/4cb73dfa0b6b49e0bb203bc1dc492b28.jpg" alt="Profile-Cut-Steel-Plate-Custom-_1-1024x768.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/66ba52ad0a454d609931bf08c7beba56.jpg" alt="Letterbox-Face-Plate-Steel-Profile-Cutting-Fabrication_1-1024x768.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/caaebc622d8a479b8bbd5076d8cbcc52.jpg" alt="Steel-Box-Section-Cutting-and-Folding-Welding-_1-1024x768.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/1b6185bb7da84d519014dbdc48f2e922.jpg" alt="Planter-Boxes-Architectural-Powder-coating-Custom-Made-Rolling-Planter-Boxes_1-1024x768.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/e02823b3aa764ecc8db7044308775d32.jpg" alt="Hydraulic-Reservoir-Steel-Fabrication-Cutting-and-Folding-Steel-Welding-_1-1024x768.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/eb2c0e31933f44feaf8490ab8e7a36aa.jpg" alt="Sign-Work-Brass-Profile-Cutting_1-1024x768.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/a52dd94d4f9b44a78363b5db3f37c627.jpg" alt="Profile-cut-angles-Profile-Cutting-Cutting-and-Folding-_1-1024x768.jpg" loading="lazy" /> </li><li className="blocks-gallery-item"><img src="https://priestsheetmetal.co.nz/uploads/67a3a5f68c7443d680412bd702d35a6e.jpg" alt="Vent-Grill-Custom-Made-Profile-Cutting-_1-768x1024.jpg" loading="lazy" /> </li>
                
              </ul>

            </figure>
          </div> {/* .wp-block-colum */}
        </div> {/* .services-photogallery */}

    </article>
    </main>
    <Footer />
    </>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    strapiService(title: {eq: "PROFILE CUTTING - Plasma & Laser"}) {
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
