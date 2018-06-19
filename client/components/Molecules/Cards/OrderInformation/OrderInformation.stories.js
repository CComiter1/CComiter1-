import React from 'react'
import { storiesOf } from '@storybook/react'

import OrderInformation from './OrderInformation'

storiesOf('Molecules/Cards', module)
  .add('OrderInformation no num', () => (
    <OrderInformation
      information={[
        { label: 'Confirmation Number', data: 991993939 },
        { label: 'Status', data: 'Out for delivery' },
        { label: 'Cost', data: '$224.31' },
        { label: 'Number of Items', data: 5 },
        { label: 'Order Date', data: '6/12/2018' },
        { label: 'Estimated Delivery', data: '6/17/18' },
      ]}
    />
  ))
  .add('OrderInformation', () => (
    <OrderInformation
      information={[
        { label: 'Confirmation Number', data: 991993939 },
        { label: 'Status', data: 'Out for delivery' },
        { label: 'Cost', data: '$224.31' },
        { label: 'Number of Items', data: 5 },
        { label: 'Order Date', data: '6/12/2018' },
        { label: 'Estimated Delivery', data: '6/17/18' },
      ]}
      orderNum={100}
    />
  ))
