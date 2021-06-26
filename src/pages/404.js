import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from '@emotion/react'
import Error from "../images/error_404.svg"
import {Link} from "gatsby";

const contents = css`
    min-height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const box = css`
    max-width:550px;
    margin:0 auto;
    text-align:center;
`

const error_svg = css`
    @media (max-width: 540px) {
        width:70%;
        height:70%
   }
  @media (prefers-color-scheme: dark) {
    .change{
      fill:#f8f8f8;
    }
  }
`

const text_en = css`
    font-family:'Roboto Mono';
    font-size:1rem;
    letter-spacing:0.4rem;
    padding:15px 0 0;
`

const text_ja = css`
    font-size:1rem;
    letter-spacing:0.1rem;
    padding:15px 0 0;
    @media (max-width: 540px) {
        padding:8px 0 0;
   }
`

const link_home = css`
    text-align:center;
    padding: 70px;
`

const home = css`
    padding:10px 15px;
    background:#000;
    font-size:1rem;
    letter-spacing:0.08rem;
    color:#fff;
    font-family:'Roboto Mono';
  @media (prefers-color-scheme: dark) {
    color: #131313;
    background: #f8f8f8;
  }
`


const NotFoundPage = () => (
  <Layout>
    <SEO title="404 NOT FOUND" />
    <div css={contents}>
        <div css={box}>
            <h1><Error css={error_svg}/></h1>
            <p css={text_en}>PAGE NOT FOUND</p>
            <p css={text_ja}>お探しのページは見つかりませんでした。</p>
            <div css={link_home}><Link to="/" css={home}>HOME</Link></div>
         </div>
    </div>
  </Layout>
)

export default NotFoundPage
