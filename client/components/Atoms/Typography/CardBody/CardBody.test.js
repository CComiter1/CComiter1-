import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import CardBody from './CardBody'

describe('CardBody', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <CardBody>TEST 123</CardBody>
    ).toJSON()
    expect(component).toMatchSnapshot()
  })
})
