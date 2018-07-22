import React from 'react'
import { storiesOf } from '@storybook/react'

import ChangeBoxDisappear from './ChangeBoxDisappear'

storiesOf('Molecules/ChangeBoxDisappear', module)
  .add('ChangeBoxDisappear', () => (
    <ChangeBoxDisappear> Change </ChangeBoxDisappear>
  ))
