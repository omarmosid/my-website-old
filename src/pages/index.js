import React from "react"

import Layout from "../components/reusable/layout/layout"
import SEO from "../components/reusable/seo/seo"
import HomeHero from "../components/page/home/home-hero/home-hero"
import HomePortfolioSection from "../components/page/home/home-portfolio-section/home-portfolio-section"
import HomeSkillsSection from "../components/page/home/home-skills-section/home-skills-section"
import HomeSocialSection from "../components/page/home/home-social-section/home-social-section"

const IndexPage = () => (
  <Layout>
      <SEO title="Home" />
      <HomeHero />
      <HomePortfolioSection />
      <HomeSocialSection />
      {/* <HomeSkillsSection /> */}
  </Layout>
)

export default IndexPage
