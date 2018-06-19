import React from 'react'
import styled from 'styled-components'

import {
  CardRowCollection,
} from '../../../Molecules'
import {
  CardBodyBold,
  TwoCollapsingColumns,
} from '../../../Atoms'

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
    <TwoCollapsingColumns>
      <CardRowCollection
        information={props.information}
      />
    </TwoCollapsingColumns>
  </Parent>
)
