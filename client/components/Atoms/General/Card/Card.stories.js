import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from './Card'

storiesOf('Atoms/General/Card', module)
  .add('Empty Card', () => <Card />)
  .add('Card with Text', () => <Card>Hello World<br /><br />Looking good</Card>)
