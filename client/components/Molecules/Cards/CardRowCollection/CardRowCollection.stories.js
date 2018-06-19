import React from 'react'
import { storiesOf } from '@storybook/react'

import CardRowCollection from './CardRowCollection'

storiesOf('Molecules/Cards', module)
  .add('CardRowCollection', () => (
    <CardRowCollection
      information={[
        { label: 'Customer ID#', data: '' },
        { label: 'Name', data: 'Asim' },
        { label: 'Account Status', data: 'good' },
        { label: 'Last Pass. Reset', data: 'today' },
      ]}
    />
  ))
