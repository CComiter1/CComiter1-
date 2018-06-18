import React from 'react'
import styled from 'styled-components'

export const Option = styled.a`
  font-family: ${props => props.theme.bodyFontFamily};
  cursor: pointer;
  margin: 0;
  color: white;
  text-decoration: none;
  padding: 1rem 1rem;
  background-color: ${prop => prop.theme.menuColor};
  width: 100%;

  &:hover {
    background-color: ${prop => prop.theme.menuActiveColor};
  }
`

export default (props) => {
  const OptionWrapper = props.active ?
    Option.extend`
      background-color: ${prop => prop.theme.menuActiveColor};
    ` :
    Option
  return (
    <OptionWrapper {...props}>
      {props.children}
    </OptionWrapper>
  )
}

