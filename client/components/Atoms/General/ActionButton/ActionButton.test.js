import React from 'react'
import renderer from 'react-test-renderer'

import ActionButton from './ActionButton'


describe('Action Button', () => {
  const component = renderer.create(<ActionButton>Press Me</ActionButton>)
  expect(component.toJSON()).toMatchSnapshot()
})
