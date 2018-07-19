import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import CardHeader from './CardHeader'

describe('CardHeader', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <CardHeader>HEADER TEXT</CardHeader>
    ).toJSON()
    expect(component).toMatchSnapshot()
  })
})
