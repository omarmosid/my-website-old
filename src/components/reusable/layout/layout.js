/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"

import styled, { ThemeProvider } from "styled-components"
import Navbar from "../navbar/navbar"
import { lightTheme, darkTheme } from "../../../utils/themes"
import { fonts } from "../../../utils/themes/styles"
import Footer from "../footer/footer"
import GlobalStyles from "../../../utils/themes/globalStyles"

const StyledLayout = styled.div`
  box-sizing: border-box;
  position: relative;
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
          {/* <Navbar /> */}
          {/* <ThemeSwitch
            isDarkThemeActive={isDarkThemeActive}
            handleThemeChange={handleThemeChange}
          /> */}
          <main>{children}</main>
          <Footer />
        </StyledLayout>
        <GlobalStyles />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
