import * as React from "react"
import Logo from "./logo"
import SmallMenu from "./small-menu"

// TODO: this looks terrible on a phone

const Header = () => (
  <>
    <header className="hero">
      <h1 className="sr-only">Priest Profile Cutting &amp; Laser</h1>
      <div className="hero__logo">
        <Logo />
      </div>

      <nav id="menu__big">
        <div className="menu-primary-container">
          <ul className="menu align-center">
            {/* this is written kinda backwards to make the link be the full size but should be fixed */}
            <li key="sheetmetal"><a href="https://priestsheetmetal.co.nz/" target='_blank' rel='noopener noreferrer'>Sheetmetal &amp; Plate</a></li>
            {/* <li key="gallery"><a href="https://priestsheetmetal.co.nz/gallery">Gallery</a></li> */}
            <li key="contact"><a href="https://priestsheetmetal.co.nz/contact" target='_blank' rel='noopener noreferrer'>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  </>
)

export default Header
