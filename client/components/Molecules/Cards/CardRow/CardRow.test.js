import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import 'jest-styled-components'

import CardRow from './CardRow'

describe('CardRow', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <CardRow label="label text">children text</CardRow>
    ).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('loads two instances of CardBody', () => {
    expect(shallow(<CardRow label="label">text</CardRow>).children().length).toBe(2)
  })
})
