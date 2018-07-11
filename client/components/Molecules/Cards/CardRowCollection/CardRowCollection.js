import React from 'react'
import styled from 'styled-components'

import {
  CardRow,
} from '../../../Molecules'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
`

export default props => (
  <Wrapper>
    {
      props.information.map(info => (
        <CardRow key={info.label} label={info.label}>{info.data}</CardRow>
      ))
    }
  </Wrapper>
)
