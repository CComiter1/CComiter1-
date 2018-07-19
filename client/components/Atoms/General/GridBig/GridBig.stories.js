import React from 'react'
import { storiesOf } from '@storybook/react'

import GridBig from './GridBig'

storiesOf('Atoms/General', module)
  .add('GridBig', () => (
    <GridBig>
      <p>Camde</p>
      <p>Camde</p>
      <p>Camde</p>
      <p>Camde</p>
    </GridBig>
  ))
