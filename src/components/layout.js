import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const GatsbyLink = styled.a`
  margin-left: 4px;
`
const JSONServerLink = styled.a`
  margin-left: 4px;
`

const JSONServerExtensionLink = styled.a`
  margin-left: 4px;
  margin-right: 4px;
`

const LinkedInLink = styled.a`
margin-left: 4px
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
          <Footer>
            <div> Built with
            <GatsbyLink href="https://www.gatsbyjs.com/starters/niklasmtj/gatsby-starter-julia">Gatsby,</GatsbyLink>
            <JSONServerLink href="https://www.npmjs.com/package/json-server">JSON Server &</JSONServerLink>
            <JSONServerExtensionLink href="https://www.npmjs.com/package/json-server-extension">JSON Server Extension</JSONServerExtensionLink>
            by<LinkedInLink href="https://www.linkedin.com/in/michabrugger/">Micha</LinkedInLink>
            </div>
            {/*
            <p>
            © {new Date().getFullYear()}
            </p>
            */}
          </Footer>
        </Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
