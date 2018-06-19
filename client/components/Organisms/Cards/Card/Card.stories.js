import React from 'react'
import { storiesOf } from '@storybook/react'

import Card from './Card'

storiesOf('Organisms/Cards', module)
  .add('Card', () => (
    <Card
      header="Caller Information"
      information={[
        { label: 'Customer ID#', data: '' },
        { label: 'Name', data: 'Asim' },
        { label: 'Account Status', data: 'good' },
        { label: 'Last Pass. Reset', data: 'today' },
      ]}
    />
  ))
