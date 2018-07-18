import React from 'react'
import styled from 'styled-components'
import {
  CardBackground,
  CardHeader,
  Line,
  ActionButton,
} from '../../../Atoms';


const Box = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
`

const NewButton = ActionButton.extend`
    margin 5px;
`

export default props => (
  <CardBackground>
    <CardHeader>Quick Actions</CardHeader>
    <Line />
    <Box>{props.infos.map(info => (<NewButton key={info}>{info}</NewButton>))}</Box>
  </CardBackground>
)
