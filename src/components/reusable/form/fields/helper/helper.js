import styled from 'styled-components'
import { textSizes, colors, fonts } from '../../../../../utils/themes/styles'

const Helper = styled.span`
  margin-top: 10px;
  color: ${props => {
    if(props.status === 'normal') return colors.lighter;
    if(props.status === 'success') return colors.success;
    if(props.status === 'error') return colors.error;
  }};
  font-size: ${textSizes.ant};
  font-family: ${fonts.pri};
  font-weight: 700;
`
Helper.defaultProps = {
  size: 'small',
  status: 'normal'
}

export default Helper