import * as React from "react"
import { Link, graphql } from "gatsby"
import { css } from '@emotion/react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/logo.svg"

const box = css`
   max-width:704px;
   margin:0 auto;
   padding: 0 0 70px;
   @media (max-width: 980px) {
        width: 100%;
   }
`

const logo = css`
  text-align:center;
  padding: 140px 0 90px;
  @media (max-width: 540px) {
        width: 100%;
        padding: 80px 10px 60px;
        box-sizing:border-box;
   }
`

const logo_svg = css`
  @media (prefers-color-scheme: dark) {
    .change{
      fill:#f8f8f8;
    }
  }
  @media (max-width: 540px) {
        width:80%;
        height:80%
   }
`

const article = css`
   padding: 0 0 60px;
`

const ttl = css`
  text-align:center;
  font-size:1.5rem;
  font-weight:700;
  letter-spacing:0.1rem;
  line-height:2.2rem;
  @media (max-width: 540px) {
        font-size:1.3rem;
        padding:0 15px 0;
  }
`

const date_category = css`
  padding:15px 0 0;
  font-family:'Roboto Mono';
  font-size:0.9rem;
  letter-spacing:0.1rem;
  color:#999;
  text-align:center;
  @media (max-width: 540px) {
        padding:10px 0 0;
  }
`

const category = css`
    padding:0 0 0 30px;
`

const text = css`
    font-size:1rem;
    font-weight:400;
    letter-spacing:0.1rem;
    line-height:1.7rem;
    padding: 15px 0 0 0;
    @media (max-width: 980px) {
        box-sizing:border-box;
        padding: 15px 15px 0;
   }
`

const Home = ({ data }) => {
  return (
    <Layout>
      <SEO title="HIKARI BLOG"></SEO>
      <section css={box}>
        <h1 css={logo}><Logo css={logo_svg} /></h1>
        {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <article key={node.id} css={article}>
              <Link to={node.fields.slug}>
                <h2 css={ttl}>{node.frontmatter.title}</h2>
                <p css={date_category}><span>{node.frontmatter.date}</span><span
                  css={category}>{node.frontmatter.category}</span></p>
                <p css={text}>{node.excerpt}</p>
              </Link>
            </article>
          ))
        }
      </section>
    </Layout>
  )
}

export default Home

export const query = graphql`
   query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order:DESC}) {
    edges {
      node {
        frontmatter {
          date
          category
          title
        }
        fields{
            slug
        }
        html
        excerpt(truncate: true)
      }
    }
  }
}

`
