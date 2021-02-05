import { Link } from "gatsby"
import React from "react"

const Menu = ({ siteTitle }) => (
    <>
        <li><Link to="/">Home</Link></li>
        <li><a href="https://priestsheetmetal.co.nz/">Sheetmetal &amp; Plate</a></li>
        {/* <li><Link to="/services">Services</Link></li> */}
        {/* <li><Link to="/quote">Quote</Link></li> */}
        <li><a href="https://priestsheetmetal.co.nz/gallery">Gallery</a></li>
        <li><a href="https://priestsheetmetal.co.nz/contact">Contact</a></li>
    </>
)

export default Menu