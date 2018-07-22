import React from 'react'
import styled from 'styled-components'
import { NavBarOptions } from '../../../Molecules/NavBar';

const Wrapper = styled.nav`
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 110px;
  z-index: 1;
  display: flex;
  background-color ${({ theme }) => theme.menuColor};

  @media (max-width: ${({ theme }) => theme.mBreakPoint}) {
    display: none
  }
`

export default props => (
  <Wrapper>
    <NavBarOptions
      options={props.options}
    />
  </Wrapper>
)
