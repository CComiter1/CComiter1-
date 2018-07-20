import React from 'react'
import styled from 'styled-components'

import {
  HyperLinkedText,
  ParagraphDescriptions,
} from '../../../Atoms'

export default props => (
  <div>
    <HyperLinkedText>{props.title}</HyperLinkedText>
    <ParagraphDescriptions>{props.children}</ParagraphDescriptions>
  </div>
)
