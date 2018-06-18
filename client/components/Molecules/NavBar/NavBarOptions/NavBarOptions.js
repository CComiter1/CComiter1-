import React from 'react'
import styled from 'styled-components'

import {
  NavOption,
} from '../../../Atoms'
import {
  Option,
} from '../../../Atoms/Typography/NavOption/NavOption'

const NavOptionContainer = styled.div`
  height: 100%;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  flex-direction: column;
  text-align: center;
`

const AccentureOption = Option.extend`
  background-color: ${({ theme }) => theme.accentColor};
  &:hover {
    background-color: ${({ theme }) => theme.menuColor};
  }
`

export default props => (
  <NavOptionContainer>
    <AccentureOption href="./">
      <i className="fa fa-lg fa-home" />
      <br />
      <br />
      Accenture
    </AccentureOption>
    {
      props.options.map(option => (
        <NavOption
          active={option.active}
          key={option.text}
          href={option.href}
        >
          {
            option.fa && (
              <React.Fragment>
                <i className={`fa fa-lg ${option.fa}`} />
                <br />
                <br />
              </React.Fragment>
            )
          }
          {option.text}
        </NavOption>
      ))
    }
  </NavOptionContainer>
)
