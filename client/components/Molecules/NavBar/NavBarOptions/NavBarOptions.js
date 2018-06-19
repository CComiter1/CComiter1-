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
  flex-direction: column;
  text-align: center;
  width: 100%;
`

const AccentureOption = Option.extend`
  background-color: ${({ theme }) => theme.accentColor};
  // background-color: black;
  &:hover {
    background-color: ${({ theme }) => theme.menuColor};
  }
`

export default props => (
  <NavOptionContainer>
    <AccentureOption href="./">
      <i className="fa fa-lg fa-phone" />
      <br />
      <br />
      Accenture
    </AccentureOption>
    {
      props.options && props.options.map(option => (
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
