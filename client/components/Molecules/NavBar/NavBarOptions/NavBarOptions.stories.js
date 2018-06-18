import React from 'react'
import styled from 'styled-components'

import { storiesOf } from '@storybook/react'

import NavBarOptions from './NavBarOptions'

const options = [
  {
    text: 'home',
    href: 'facebook.com',
    fa: 'fa-home',
  },
  {
    text: 'hell',
    href: 'facebook.com',
    fa: 'fa-camera-retro',
  },
  {
    text: 'house',
    href: 'facebook.com',
    fa: 'fa-home',
  },
  {
    text: 'hosdfsde',
    href: 'facebook.com',
    fa: 'fa-home',
  },
]

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`

storiesOf('Molecules/NavBar', module)
  .add('NavBarOptions', () => (
    <Wrapper>
      <NavBarOptions options={options} />
    </Wrapper>
  ))
