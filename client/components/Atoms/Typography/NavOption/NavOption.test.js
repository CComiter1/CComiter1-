import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import NavOption from './NavOption'

describe('NavOption', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <NavOption>ONE OPTION</NavOption>
    ).toJSON()
    expect(component).toMatchSnapshot()
  })
})
