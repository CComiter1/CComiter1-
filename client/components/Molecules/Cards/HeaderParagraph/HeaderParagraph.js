import React from 'react'

import {
  HyperLinkedText,
  CardBody,
} from '../../../Atoms'

export default props => (
  <div>
    <HyperLinkedText>{props.title}</HyperLinkedText>
    <CardBody>{props.children}</CardBody>
  </div>
)
