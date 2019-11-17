/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"

import styled, { createGlobalStyle, ThemeProvider } from "styled-components"
import Navbar from "../navbar/navbar"
import { lightTheme, darkTheme } from "../../../utils/themes"
import { fonts } from "../../../utils/themes/styles"
import Footer from "../footer/footer"

const GlobalLayout = createGlobalStyle`
  html {
    font-family: sans-serif;
    font-size: 10px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.headingTextColor};
    font-family: ${fonts.sec};
    h1, h2, h3, h4, h5, h6 {
      font-family: ${fonts.pri};
    }
    h1 {
      font-size: 48px;
    }
    a {
      color: inherit;
      font-family: ${fonts.pri};
    }
  }
`
const StyledLayout = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  main {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    flex: 100%;
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Layout = ({ children }) => {
  const [isDarkThemeActive, setDarkTheme] = useState(true);
  const handleThemeChange = (checked) => {
    setDarkTheme(checked);
  }
  return (
    <>
      <ThemeProvider
        theme={isDarkThemeActive ? darkTheme : lightTheme}
      >
        <StyledLayout>
          <GlobalLayout />
          <Navbar />
          {/* <ThemeSwitch
            isDarkThemeActive={isDarkThemeActive}
            handleThemeChange={handleThemeChange}
          /> */}
          <main>{children}</main>
          <Footer />
        </StyledLayout>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
