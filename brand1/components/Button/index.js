import styled, { css } from 'styled-components'

import OriginalButton from 'common/components/Button';

const Button = styled(OriginalButton)`
  && {
    border-color: green;
    background-color: lightgreen;
    
    // Kind
    ${props => props.secondary && css`
      border-color: blue;
      background-color: lightblue;
    `}
  }
 
`

export default Button;