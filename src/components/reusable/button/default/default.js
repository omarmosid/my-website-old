import styled from 'styled-components'
import { colors } from '../../../../utils/themes/styles'

const Default = styled.button`
  cursor: pointer;

  /* Size */
  padding: 10px 26px;
  font-size: 18px;

  /* Colors/Borders */
  background: ${props => {
    if(props.intent === 'primary') {
      return colors.pri
    }
    if(props.intent === 'danger') {
      return colors.danger
    }
  }};
  color: #fff;
  border: none;
  border-radius: 5px;

  /* Type */
  font-weight: bold;

  &:hover {
    background: ${props => {
      if(props.intent === 'primary') {
        return colors.priDark
      }
      if(props.intent === 'danger') {
        return colors.dangerDark
      }
    }};
  }
`

Default.defaultProps = {
  intent: 'primary'
}

export default Default