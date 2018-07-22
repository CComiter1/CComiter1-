import React from 'react'
import styled from 'styled-components'

import {
  CardHeader,
  CardBackground,
  Line,
  SearchBox,
} from '../../../Atoms'
import { HeaderParagraph, ChangeBoxDisappear } from '../../../Molecules';

const Row = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-start; 
`

export default () => (
  <CardBackground>
    <CardHeader>Smart Assist</CardHeader>
    <Line />
    <SearchBox placeholder="Search" />
    <Row>
      <ChangeBoxDisappear />
    </Row>
    <HeaderParagraph title="Reset Password"> To change the caller's password, first confirm their identity by asking the security questions on this page.  If they answer correctly, click the "Reset Password" link on this page to send an... </HeaderParagraph>
    <HeaderParagraph title="Forgotten Password"> If the caller has forgotten their password, first confirm their identity by asking the security.... </HeaderParagraph>
  </CardBackground>
)
