import React from "react"

import Layout from "../components/reusable/layout/layout"
import SEO from "../components/reusable/seo/seo"
import HomeHero from "../components/page/home/home-hero/home-hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeHero />
  </Layout>
)

export default IndexPage
