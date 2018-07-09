import React from 'react'
import { CardBackground, CardHeader, Line } from '../../../Atoms';
import OrderInformation from '../../../Molecules/Cards/OrderInformation/OrderInformation';

export default props => (
  <CardBackground>
    <CardHeader>Order History</CardHeader>
    <Line />
    {
      props.orders.map(order => (
        <OrderInformation
          orderNum={order.orderNum}
          key={order.orderNum}
          information={order.information}
        />
      ))
    }
  </CardBackground>
)
