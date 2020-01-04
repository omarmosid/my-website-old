import styled from 'styled-components'
import Default from '../default/default'
import { colors } from '../../../../utils/themes/styles';

const Ghost = styled(Default)`
  background: transparent;
  border: 2px solid ${colors.sec};
  color: ${colors.sec};
  &:hover {
    color: ${colors.pri};
    border: 2px solid ${colors.pri};
    background: transparent;
  }
`

export default Ghost;