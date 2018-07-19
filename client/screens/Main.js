import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {
  Card,
  Orders,
  QuickActions,
} from '../components/Organisms'
import { CallWindow, GridBig } from '../components/Atoms'

const Box = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: ${({ theme }) => theme.mBreakPoint}) {
    flex-direction: column;
    align-items: center;
    
  }
`

const Main = props => (
  <GridBig>
    <Box>
      <Card
        header="Caller Information"
        information={props.user}
      />
      <QuickActions
        infos={['Reset Password', 'Change Address', 'Pay Bill', 'Edit Payment Information']}
      />
      <CallWindow />
    </Box>
    <Box>
      <Card
        header="Company Membership"
        information={[
          { label: 'Membership Status', data: 'Gold Member' },
          { label: 'Renewal Plan', data: 'Monthly Autopay' },
          { label: 'Renewal Method', data: 'Credit Card' },
          { label: 'Last Login', data: '6/14/2018' },
          { label: 'Last Issue', data: 'Data Breach' },
          { label: 'First Experience Issue', data: 'Yes It Was' },
          { label: 'Issue Resolved', data: 'Yes' },
          { label: 'Issue Return', data: 'No' },
        ]}
      />
      <Orders
        orders={[
          {
            information: [
              { label: 'Confirmation Number', data: 991993939 },
              { label: 'Status', data: 'Out for delivery' },
              { label: 'Cost', data: '$224.31' },
              { label: 'Number of Items', data: 5 },
              { label: 'Order Date', data: '6/12/2018' },
              { label: 'Estimated Delivery', data: '6/17/18' },
            ],
            orderNum: 3,
          },
          {
            information: [
              { label: 'Confirmation Number', data: 4444 },
              { label: 'Status', data: 'Out for delivery' },
              { label: 'Cost', data: '$224.31' },
              { label: 'Number of Items', data: 5 },
              { label: 'Order Date', data: '6/12/2018' },
              { label: 'Estimated Delivery', data: '6/17/18' },
            ],
            orderNum: 5,
          },
        ]}
      />
    </Box>
  </GridBig>
)

const mapState = state => ({
  user: state.user,
})

export default connect(mapState)(Main)
