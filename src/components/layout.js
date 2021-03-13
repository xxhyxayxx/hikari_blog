import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { css } from '@emotion/react'
import "./layout.css"

const contents = css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const copyright = css`
   text-align:center;
   font-family:'Roboto Mono';
`

const footer = css`
   margin-top: auto;
   padding: 0 0 10px;
   font-size:0.9rem;
   letter-spacing: 0.1rem;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div css={contents}>
        <main>{children}</main>
        <footer css={footer}>
            <p css={copyright}>© {new Date().getFullYear()},{data.site.siteMetadata?.title || `Title`}</p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
