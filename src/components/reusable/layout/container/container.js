import styled from 'styled-components'
import { dimensions } from '../../../../utils/themes/styles'

const Container = styled.div`
  box-sizing: border-box; 
  width: 100%;
  max-width: ${props => props.fullwidth ? '100%' : dimensions.siteWidth};
  padding: ${props => props.padding};
  display: inline-block;
  background: ${props => props.background};
  border: ${props => props.border};
`

Container.defaultProps = {
  fullwidth: false,
  padding: "0px",
  background: 'transparent',
  border: 'none'
}

export default Container