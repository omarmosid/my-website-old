import React, { useState } from "react"
import PropTypes from "prop-types"

import styled, { ThemeProvider } from "styled-components"
import Navbar from "../navbar/navbar"
import { lightTheme, darkTheme } from "../../../utils/themes"
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
  const [isDarkThemeActive, setDarkTheme] = useState(false);
  const handleThemeChange = (checked) => {
    setDarkTheme(checked);
  }
  return (
    <>
      <ThemeProvider
        theme={isDarkThemeActive ? darkTheme : lightTheme}
      >
        <GlobalStyles />
        <StyledLayout>
          <Navbar />
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
