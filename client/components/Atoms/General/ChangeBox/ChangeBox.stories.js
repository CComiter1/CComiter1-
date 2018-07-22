import React from 'react'
import { storiesOf } from '@storybook/react'

import ChangeBox from './ChangeBox'

storiesOf('Atoms/General/ChangeBox', module)
  .add('password', () => <ChangeBox> password </ChangeBox>)
  .add('change', () => <ChangeBox> change </ChangeBox>)