import React from 'react'
import { storiesOf } from '@storybook/react'

import CardHeader from './CardHeader'

storiesOf('Atoms/Typography/CardHeader', module)
  .add('ShortTitle', () => <CardHeader>Hello World</CardHeader>)

