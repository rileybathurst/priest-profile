import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../components/logo"
import Menu from "../components/menu"
import SmallMenu from "../components/smallmenu"

import styles from "../styles/index.scss";

const Header = ({ siteTitle }) => (
  <>
    <header>
      <div className="bg-primary hero-logo">
        <Logo />
      </div>

      <nav id="menu_small" className="menu-small hide-for-print inactive">
        <ul className="text-center">
          <Menu />
        </ul>
      </nav>

      <div id="menu_toggle" className="bg-secondary shadow-darker text-center">
        <SmallMenu />
      </div>

      <div className="bg-secondary show-for-medium shadow"> {/* medium up navigation */}
        <nav>
          <div className="menu-primary-container">
            <ul className="menu align-center">
              <Menu />
            </ul>
          </div>
        </nav>
      </div>{/* medium up nav */}
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
