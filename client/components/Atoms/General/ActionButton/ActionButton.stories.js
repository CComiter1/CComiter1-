import React from 'react'
import { storiesOf } from '@storybook/react'

import ActionButton from './ActionButton'

storiesOf('Atoms/General/ActionButton', module)
  .add('Regular', () => <ActionButton>Click</ActionButton>)
