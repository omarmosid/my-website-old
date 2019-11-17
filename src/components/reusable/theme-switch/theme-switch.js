import React from 'react'
import styled from 'styled-components'
import Switch from "react-switch";

const StyledThemeSwitch = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 40px 20px;
  display: flex;
  justify-content: flex-end;
`

const ThemeSwitch = ({
  isDarkThemeActive,
  ...props
}) => {
  console.log(isDarkThemeActive);
  return (
    <StyledThemeSwitch>
      <Switch
        onChange={(checked) => props.handleThemeChange(checked)}
        checked={isDarkThemeActive}
        onColor="#002"
        offColor="#ddd"
      />
    </StyledThemeSwitch>
  )
}

ThemeSwitch.defaultProps = {
  isDarkThemeActive: false
}

export default ThemeSwitch