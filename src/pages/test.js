import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import styled from 'styled-components'
import Layout from '../components/reusable/layout/layout'

const Block = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #121212;
  h1 {
    margin: 0px;
  }
`

const RedBlock = styled(Block)`
  background: red;
`

const Test = () => {
  return (
    <Layout>
      <Parallax pages={2} scrolling={true}>
        <ParallaxLayer offset={0} speed={1}>
          <Block>
            <h1>Section 1</h1>
          </Block>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={0.2}>
          <h2>helllo from the other side</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <RedBlock>
            <h1>Red</h1>
          </RedBlock>
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={0.4}>
          <h2>helllo from the other side</h2>
        </ParallaxLayer>
      </Parallax>
    </Layout>
  )
}

export default Test
