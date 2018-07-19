import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import CardBackground from './CardBackground'

describe('CardBackground', () => {
  const component = renderer.create(<CardBackground>Press Me</CardBackground>)
  it('renders corrctly', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
