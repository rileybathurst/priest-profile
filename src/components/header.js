import * as React from "react"
// import { Link } from "gatsby"
import Logo from "./logo"
import SmallMenu from "./small-menu"

const Header = () => (
  <>
    <header>
      <h1 className="sr-only">Priest Profile Cutting &amp; Laser</h1>
      <div className="bg-primary hero-logo">
        <Logo />
      </div>

      <nav id="menu_small" className="menu-small hide-for-print inactive">
        <ul className="text-center">
          <li key="sheetmetal"><a href="https://priestsheetmetal.co.nz">Priest Sheetmetal &amp; Plate</a></li>
          <li key="contact"><a href="https://priestsheetmetal.co.nz/contact">Contact</a></li>
        </ul>
      </nav>

      <div id="menu_toggle" className="bg-secondary shadow-darker text-center">
        <SmallMenu />
      </div>

      <div className="bg-secondary show-for-medium shadow"> {/* medium up navigation */}
        <nav>
          <div className="menu-primary-container">
            <ul className="menu align-center">
              {/* this is written kinda backwards to make the link be the full size but should be fixed */}
              <li key="sheetmetal"><a href="https://priestsheetmetal.co.nz/">Sheetmetal &amp; Plate</a></li>
              <li key="gallery"><a href="https://priestsheetmetal.co.nz/gallery">Gallery</a></li>
              <li key="contact"><a href="https://priestsheetmetal.co.nz/contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>{/* medium up nav */}
    </header>
  </>
)

export default Header
