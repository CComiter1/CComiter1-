import React from 'react'
import { storiesOf } from '@storybook/react'

import CardRow from './CardRow'

storiesOf('Molecules/Cards', module)
  .add('Card Row', () => <CardRow label="Quantity">10</CardRow>)
