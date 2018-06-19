import React from 'react'
import styled from 'styled-components'

import {
  CardRowCollection,
} from '../../../Molecules'
import {
  CardBodyBold,
} from '../../../Atoms'

const OrderHolder = styled.div`
  column-count: 2;
  column-gap: 40px;
  
  @media (max-width: ${({ theme }) => theme.sBreakPoint}) {
    column-count: 1;
  }
`

const Parent = styled.div`
  padding: 10px 0;
`

const OrderNum = CardBodyBold.extend`
  color: ${({ theme }) => theme.accentColor};
  margin: 0 .5rem;
`

export default props => (
  <Parent>
    {
      <OrderNum>Order: {props.orderNum}</OrderNum>
    }
    <OrderHolder>
      <CardRowCollection
        information={props.information}
      />
    </OrderHolder>
  </Parent>
)
