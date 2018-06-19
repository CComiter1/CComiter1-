import React from 'react'

import {
  CardHeader,
  CardBackground,
} from '../../../Atoms'
import { CardRowCollection } from '../../../Molecules';

export default props => (
  <CardBackground>
    <CardHeader>{props.header}</CardHeader>
    <CardRowCollection
      information={props.information}
    />
  </CardBackground>
)
