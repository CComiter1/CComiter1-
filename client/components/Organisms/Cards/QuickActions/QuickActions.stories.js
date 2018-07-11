import React from 'react'
import { storiesOf } from '@storybook/react'

import QuickActions from './QuickActions'

storiesOf('Organisms/Cards', module)
  .add('QuickActions', () => (
    <QuickActions
      infos={['Reset Password', 'Change Address', 'Pay Bill', 'Edit Payment Information']}
    />
  ))
