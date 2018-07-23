import React from 'react'
import { storiesOf } from '@storybook/react'

import * as typography from './index'

storiesOf('Atoms/Typography', module)
  .add('General', () => (
    <div>
      <typography.CardBody>CardBody</typography.CardBody>
      <typography.CardBodyBold>CardBodyBold</typography.CardBodyBold>
      <typography.CardHeader>CardHeader</typography.CardHeader>
      <typography.HyperLinkedText>HyperLinkedText</typography.HyperLinkedText>
      <typography.NavHeader>NavHeader</typography.NavHeader>
      <typography.ParagraphDescriptions>ParagraphDescriptions</typography.ParagraphDescriptions>
    </div>
  ))
