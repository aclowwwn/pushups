/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import pusher from '../images/pusher.svg'
import lightPusher from '../images/light-pusher.svg'
import classnames from './layout.css'

import "./layout.css"

class Layout extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {
      darkMode: true
    }
  }

  render() {
    const { darkMode } = this.state

    return (
        <div
          style={{
            backgroundColor: darkMode? 'black': 'white',
            color: darkMode? 'white': 'black',
            padding: `0 1.0875rem 1.45rem`,
            padding: '75px 50px',
            minHeight: '100vh',
            minWidth: '100vw'
          }}
        >
          {/* <div style={{position: 'absolute', top: 10, left: 20}}> */}
            <img class="logo" src={darkMode? lightPusher: pusher} />
          {/* </div> */}
          <span onClick={() => this.setState({ darkMode: !darkMode })} style={{position: 'absolute', position: 'absolute', top: 10, right: 20, fontSize: 28, userSelect: 'none', cursor: 'pointer'}}>{darkMode? '🌔': '🌘'}</span>
          <main>{this.props.children}</main>
          <footer>
            <a target="_blank" style={{textDecoration: 'none', color: darkMode? 'white': 'black', position: 'fixed', bottom: 10, right: 20}} href="https://www.github.com/aclowwwn">@clowwwn™</a>
          </footer>
        </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
