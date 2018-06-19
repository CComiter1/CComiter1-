import React from 'react'
import { storiesOf } from '@storybook/react'

import CardBackground from './CardBackground'

storiesOf('Atoms/General/CardBackground', module)
  .add('Empty CardBackground', () => <CardBackground />)
  .add('CardBackground with Text', () => <CardBackground>Hello World<br /><br />Looking good</CardBackground>)
