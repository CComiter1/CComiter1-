import React from 'react'
import { storiesOf } from '@storybook/react'

import SmartAssist from './SmartAssist'

storiesOf('Organisms/SmartAssist', module)
  .add('SmartAssist', () => (
    <SmartAssist header="Smart Assist" />
  ))
