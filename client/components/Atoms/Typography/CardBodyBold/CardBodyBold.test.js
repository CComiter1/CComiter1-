import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import CardBodyBold from './CardBodyBold'

describe('CardBodyBold', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <CardBodyBold>BOLD TEST</CardBodyBold>
    ).toJSON()
    expect(component).toMatchSnapshot()
  })
})
