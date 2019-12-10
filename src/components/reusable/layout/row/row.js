import styled from 'styled-components'
import { dimensions } from '../../../../utils/themes/styles'

const Row = styled.div`
  width: 100%;
  max-width: ${props => props.fullwidth ? '100%' : dimensions.siteWidth};
  height: auto;
  display: flex;
`
Row.defaultProps = {
  fullwidth: false,
}

export default Row