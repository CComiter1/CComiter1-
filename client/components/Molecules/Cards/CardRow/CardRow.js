import React from 'react'
import styled from 'styled-components'

import {
  CardBody,
  CardBodyBold,
} from '../../../Atoms'

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 0;  
`

export default props => (
  <Row>
    <CardBodyBold>{props.label}:</CardBodyBold>
    <CardBody>{props.children}</CardBody>
  </Row>
)
