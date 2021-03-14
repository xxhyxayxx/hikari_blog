import * as React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from '@emotion/react'
import Logo2 from "../images/logo2.svg"
import Logo3 from "../images/logo2_sp.svg"

const contents = css`
    position:relative;
`

const logo = css`
   max-width:120px;
   position: fixed;
   left: 25px;
   @media (max-width: 980px) {
        position: absolute;
  }
`

const pc=css`
    display:block;
    @media (max-width: 980px) {
        display:none;
  }
`

const sp=css`
    display:none;
    @media (max-width: 980px) {
        display:block;
  }
`

const box = css`
   max-width:710px;
   margin:0 auto;
   @media (max-width: 540px) {
        margin:0 15px 0;
   }
`

const date_category = css`
    padding: 70px 0 20px;
    color: #000;
    border-bottom: 2px solid #222;
    display:flex;
    justify-content:space-between;
    font-family:'Roboto Mono';
    letter-spacing:0.1rem;
    @media (max-width: 980px) {
        padding: 120px 0 20px;
    }
`

const date = css`
    display:block;
`

const category = css`
    display:block;
`

const title = css`
    padding:50px 0 0;
    font-weight:700;
    font-size:1.5rem;
    letter-spacing:0.1rem;
    line-height:2.2rem;
    @media (max-width: 540px) {
        padding:30px 0 0;
   }
`

const text = css`
    padding:25px 0 0;
    font-sie:1rem;
    letter-spacing:0.08rem;
    line-height:1.9rem;
    @media (max-width: 540px) {
        padding:0;
   }
    
    a{
        color:#ef4884;
        text-decoration:underline;
    }
    
    p{
        padding:8px 0;
    }
    
    h1{
        font-size:1.2rem;
        padding:25px 0 0;
    }
`
const link_home = css`
    text-align:center;
    padding: 70px;
`

const home = css`
    padding:10px 15px;
    background:#000;
    font-sie:1rem;
    letter-spacing:0.08rem;
    color:#fff;
    font-family:'Roboto Mono';
`

const Post = ({ data }) => {
    const post = data.markdownRemark;
    return(
        <Layout css={contents}>
            <SEO title={post.frontmatter.title} description={post.except}></SEO>
            <Link to="/"><h1 css={logo}><Logo2 css={pc} /><Logo3 css={sp} /></h1></Link>
            <section css={box}>
                <p css={date_category}><span css={date}>{post.frontmatter.date}</span><span css={category}>{post.frontmatter.category}</span></p>
                <h2 css={title}>{post.frontmatter.title}</h2>
                <div css={text} dangerouslySetInnerHTML={{__html:post.html}}/>
                <div css={link_home}><Link to="/" css={home}>HOME</Link></div>
            </section>
        </Layout>
    )
}

export default Post

export const query = graphql`
    query($slug: String!){
        markdownRemark(fields:{slug:{eq:$slug}}){
            html
            excerpt(truncate: true)
            frontmatter{
                title
                date
                category
            }
        }
    }
`

