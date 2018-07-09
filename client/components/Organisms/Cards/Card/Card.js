import React from 'react'

import {
  CardHeader,
  CardBackground,
  Line,
} from '../../../Atoms'
import { CardRowCollection } from '../../../Molecules';

export default props => (
  <CardBackground>
    <CardHeader>{props.header}</CardHeader>
    <Line />
    <CardRowCollection
      information={props.information}
    />
  </CardBackground>
)
