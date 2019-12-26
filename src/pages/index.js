import React from "react"
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'

import Layout from "../components/reusable/layout/layout"
import SEO from "../components/reusable/seo/seo"
import HomeHero from "../components/page/home/home-hero/home-hero"
import HomePortfolioSection from "../components/page/home/home-portfolio-section/home-portfolio-section"
import HomeSkillsSection from "../components/page/home/home-skills-section/home-skills-section"

const IndexPage = () => (
  <Layout>
    <Parallax pages={3} scrolling={true}>
      <SEO title="Home" />
      <ParallaxLayer factor={1} offset={0} speed={0.6} style={{ position: 'fixed' }}>
        <img src="http://source.unsplash.com/rTZW4f02zY8/1600x900" alt="stars" style={{ position: 'fixed', zIndex: '0', width: '100%', height: '200vh', objectFit: 'cover', filter: 'brightness(40%)' }} />
      </ParallaxLayer>
      <HomeHero />
      <HomePortfolioSection />
      <HomeSkillsSection />
    </Parallax>
  </Layout>
)

export default IndexPage
