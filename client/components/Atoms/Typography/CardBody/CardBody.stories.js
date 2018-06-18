import React from 'react'
import { storiesOf } from '@storybook/react'

import CardBody from './CardBody'

storiesOf('Atoms/Typography/CardBody', module)
  .add('short text', () => <CardBody>Hello World</CardBody>)
  .add('long text', () => (
    <CardBody>
      asdfjasdfj;alkjfkajs;dlfkajsdlkfj;ljeih
      oasdpjfio jqwpioejfiwe jpio fjpiowjas;ldf jpioaskld fjpa
      as ;ldfjkalsd fj;askld fj;laksdj f;akld fja;klsd

      as;kld fj;asdlfja;lsdk fja
      s;klad jfa;ls
    </CardBody>
  ))
