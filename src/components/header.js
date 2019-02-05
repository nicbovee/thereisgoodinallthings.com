import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import poppies from "../images/charlies-poppies.svg";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#5095ea`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      className="header"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <p style={{ margin: 0 }} className="site-title">
      <img src={poppies} 
      style={{
        display: `block`,
        margin: `auto`,
        width: `50%`,
      }}/>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </p>
      <nav className="nav">
        <ul>
          <li><Link className="nav__link" to="/posts/nics-story-of-charles">Nic's Story</Link></li>
          <li><Link className="nav__link" to="/posts/danis-story-of-charles">Dani's Story</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
