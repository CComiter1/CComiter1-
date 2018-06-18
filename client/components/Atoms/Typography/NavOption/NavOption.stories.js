import React from 'react'
import { storiesOf } from '@storybook/react'

import NavOption from './NavOption'

storiesOf('Atoms/Typography/NavOption', module)
  .add('inactive', () => <NavOption>Home</NavOption>)
  .add('active', () => <NavOption active>Active</NavOption>)
