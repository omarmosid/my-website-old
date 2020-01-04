import styled from 'styled-components'
import { colors, textSizes } from '../../../../../utils/themes/styles';

const Textarea = styled.textarea`
  box-sizing: border-box;
  height: 400px;
  width: 100%;
  padding: 10px 10px;

  /* Colors */
  color: ${colors.sec};

  /* Border/Outline */
  border: 1px solid ${props => {
    if(props.status === 'normal') return colors.lighter;
    if(props.status === 'success') return colors.success;
    if(props.status === 'error') return colors.error;
  }};
  border-bottom: 4px solid ${props => {
    if(props.status === 'normal') return colors.lighter;
    if(props.status === 'success') return colors.success;
    if(props.status === 'error') return colors.error;
  }};

  /* Font */
  font-size: ${textSizes.rabbit};
  line-height: 100%;

  /* Placeholder */
  &::placeholder {
    color: ${colors.lighter};
  }

  /* Focus */
  &:focus {
    outline: none;
    /* border-color: ${colors.priDark}; */
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);
  }
`

Textarea.defaultProps = {
  fullwidth: false,
  status: 'normal'
}

export default Textarea