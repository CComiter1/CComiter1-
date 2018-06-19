import React from 'react'
import styled from 'styled-components'

import {
  CardRow,
} from '../../../Molecules'

const Wrapper = styled.div`
  margin: 0 1.2rem;
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
