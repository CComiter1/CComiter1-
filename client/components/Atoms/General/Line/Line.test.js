import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Line from './Line'

describe('Line', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Line />
    ).toJSON()
    expect(component).toMatchSnapshot()
  })
})
