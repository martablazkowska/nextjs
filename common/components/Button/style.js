import styled, { css } from 'styled-components'

const StyledButton = styled.a`
  display: inline-block;
  cursor: pointer;
  border-radius: 3px;
  padding: 0.5rem 0.5rem;
  background: #888;
  color: white;
  border: 2px solid #888;
  transition: .15s ease-out;
  
  :hover {
    border-color: #ebebeb;
    background: white;
    color: #888;
  }
  
  :not(:first-of-type) {
    margin-left: 15px;
  }
  
  // Kind
  
  ${props => props.secondary && css`
    background: black;
    border-color: black;
    
    :hover {
      border-color: #888;
      background: white;
    }
  `}
`

export default StyledButton;