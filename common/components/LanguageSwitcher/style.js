import styled, { css } from 'styled-components'

const StyledLanguageSwitcher = styled.ol`
  display: flex;
  padding: 10px;
  margin: 0;
  list-style-type: none;
 
  li {
    cursor: pointer;
    position: relative;
    margin: 0 3px;
    padding: 5px 10px 5px 35px;
    border-radius: 30px;
    border: 2px solid lightblue;
    transition: .25s ease-out;
    background-image: url(attr(data-flag));
    
    &:first-of-type {
      margin-left: 0;
    }
  
    &.active {
      background-color: royalblue;
      color: white;
    }
    
    :hover {
      border-color: cornflowerblue;
    }
  }
`

export default StyledLanguageSwitcher;