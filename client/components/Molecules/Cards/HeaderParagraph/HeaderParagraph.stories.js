import React from 'react'
import { storiesOf } from '@storybook/react'

import HeaderParagraph from './HeaderParagraph'

storiesOf('Molecules/HeaderParagraph', module)
  .add('ResetPassword', () => <HeaderParagraph title="Reset Password">To change the caller's password, first confirm their identity by asking the security questions on this page. If they answer correctly, click the "Reset Password" link on this page to send an...</HeaderParagraph>)
  .add('ForgotPassword', () => <HeaderParagraph title="Forgotten Password">If the caller has forgotten their password, first confirm their identity by asking the security....</HeaderParagraph>)
