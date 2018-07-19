import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import ActionButton from './ActionButton'

describe('Action Button', () => {
  const component = renderer.create(<ActionButton>Press Me</ActionButton>)
  it('renders corrctly', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
