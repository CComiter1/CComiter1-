import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {
  Card,
  Orders,
  QuickActions,
  SmartAssist,
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

const CallContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;

  @media (max-width: ${({ theme }) => theme.sBreakPoint}) {
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
      <CallContainer>
        <QuickActions
          infos={['Reset Password', 'Change Address', 'Pay Bill', 'Edit Payment Information']}
        />
        <CallWindow />
      </CallContainer>
    </Box>
    <Box>
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
      <SmartAssist />
    </Box>
  </GridBig>
)

const mapState = state => ({
  user: state.user,
})

export default connect(mapState)(Main)
