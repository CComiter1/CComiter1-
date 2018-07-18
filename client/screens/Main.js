import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  Card,
  Orders,
  QuickActions,
} from '../components/Organisms'

const GridBig = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 15px;
  padding: 15px 50px;
`

const Main = props => (
  <GridBig>
    <Card
      header="Caller Information"
      information={props.user}
    />
    <QuickActions
      infos={['Reset Password', 'Change Address', 'Pay Bill', 'Edit Payment Information']}
    />
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
  </GridBig>
)

const mapState = state => ({
  user: state.user,
})

export default connect(mapState)(Main)
