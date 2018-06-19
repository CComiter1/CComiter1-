import React from 'react'
import { storiesOf } from '@storybook/react'

import NavBar from './NavBar'

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
    active: true,
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

storiesOf('Organisms/Nav', module)
  .add('NavBar', () => <NavBar options={options} />)
