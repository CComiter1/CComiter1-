import React from 'react'
import { storiesOf } from '@storybook/react'

import ParagraphDescriptions from './ParagraphDescriptions'

storiesOf('Atoms/Typography/ParagraphDescriptions', module)
  .add('ResetPasswordDesc', () => <ParagraphDescriptions>To change the caller's password, first confirm their identity by asking the security questions on this page. If they answer correctly, click the "Reset Password" link on this page to send an...</ParagraphDescriptions>)
  .add('ForgotPasswordDesc', () => <ParagraphDescriptions>If the caller has forgotten their password, first confirm their identity by asking the security....</ParagraphDescriptions>)