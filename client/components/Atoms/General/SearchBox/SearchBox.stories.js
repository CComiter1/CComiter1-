import React from 'react'
import { storiesOf } from '@storybook/react'

import SearchBox from './SearchBox'

storiesOf('Atoms/General/SearchBox', module)
  .add('SearchBox', () => <SearchBox placeholder="Search"/>)