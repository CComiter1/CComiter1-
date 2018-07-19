import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import CardRowCollection from './CardRowCollection'

describe('CardRowCollection', () => {
  it('renders correctly', () => {
    const information = [
      { label: 'Customer ID#', data: '' },
      { label: 'Name', data: 'Asim' },
      { label: 'Account Status', data: 'good' },
      { label: 'Last Pass. Reset', data: 'today' },
    ]
    const component = renderer.create(
      <CardRowCollection information={information} />
    ).toJSON()
    expect(component).toMatchSnapshot()
  })
})
