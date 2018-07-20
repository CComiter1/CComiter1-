import React from 'react'
import styled from 'styled-components'

import {
  ChangeBox,
} from '../../../Atoms'


const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-right: 100px;
  width: 100%;
`

export default class ChangeBoxDisappear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        { text: 'password', id: 1 },
        { text: 'change', id: 2 },
      ],
    }
    this.removeElement = this.removeElement.bind(this)
  }

  removeElement(id) {
    const newBoxes = this.state.boxes.filter(box => box.id !== id)
    this.setState({ boxes: newBoxes })
  }

  render() {
    return (
      <Wrapper>
        {
          this.state.boxes.map(box => (
            <ChangeBox onClick={() => this.removeElement(box.id)}>
              {
                box.text
              }
            </ChangeBox>
          ))
        }
      </Wrapper>
    )
  }
}
