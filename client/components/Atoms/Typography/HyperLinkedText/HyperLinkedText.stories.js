import React from 'react'
import { storiesOf } from '@storybook/react'

import HyperLinkedText from './HyperLinkedText'

storiesOf('Atoms/Typography/HyperLinkedText', module)
  .add('ResetPassword', () => <HyperLinkedText> Reset Password </HyperLinkedText>)
  .add('ForgottenPassword', () => <HyperLinkedText> Forgotten Password </HyperLinkedText>)