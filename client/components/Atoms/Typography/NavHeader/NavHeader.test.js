import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import NavHeader from './NavHeader'

describe('NavHeader', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <NavHeader>NAV HEADER TEXT</NavHeader>
    ).toJSON()
    expect(component).toMatchSnapshot()
  })
})
