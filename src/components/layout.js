import React from 'react'
import { Link } from 'gatsby'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1 className="title">
          <Link className="title__link" to={`/`}>
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3 className="title">
          <Link className="title__link" to={`/`}>
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div className="content">
        <header>{header}</header>
        <main>{children}</main>
        <footer className="footer">© Me</footer>
      </div>
    )
  }
}

export default Layout
