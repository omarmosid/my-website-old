import React from "react"
import { configure, addParameters, addDecorator } from "@storybook/react"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import GlobalStyles from "../src/utils/themes/globalStyles"
import { ThemeProvider } from "styled-components"
import { darkTheme, lightTheme } from "../src/utils/themes"

addDecorator(s => (
  <>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
    </ThemeProvider>
    {s()}
  </>
))

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module)

// Globally Apply Viewport Option
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: "responsive",
  },
})
