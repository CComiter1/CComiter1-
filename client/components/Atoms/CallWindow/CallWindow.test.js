import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { CallWindow } from './CallWindow'

describe('CallWindow', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <CallWindow />,
    ).toJSON()
    expect(component).toMatchSnapshot()
  })
})
